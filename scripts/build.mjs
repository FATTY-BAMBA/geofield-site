import { build } from 'vite';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { verifyBuild } from './verify-seo.mjs';

await build();
// Keep the server bundle beside node_modules so external React imports resolve.
const serverDir = await mkdtemp(path.resolve('.prerender-'));
try {
  await build({
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: serverDir,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  });
  const { render, pages, SITE_ORIGIN } = await import(pathToFileURL(path.join(serverDir, 'entry-server.mjs')));
  const template = await readFile('dist/index.html', 'utf8');
  if (!template.includes('<!--route-head-->') || !template.includes('<!--app-html-->')) {
    throw new Error('Missing prerender placeholders in the HTML template.');
  }
  for (const route of [...Object.keys(pages), '/404']) {
    const { head, html } = render(route);
    const file = path.join('dist', route === '/' ? 'index.html' : `${route.slice(1)}.html`);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, template.replace('<!--route-head-->', () => head).replace('<!--app-html-->', () => html));
  }
  const urls = Object.keys(pages).map((route) => `  <url><loc>${SITE_ORIGIN}${route}</loc></url>`);
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
  await verifyBuild({ pages, SITE_ORIGIN, render });
  console.log(`Prerendered and verified ${urls.length} indexable pages plus a custom 404.`);
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
