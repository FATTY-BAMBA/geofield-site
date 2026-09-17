import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;' })[char]);

// Build-time regression checks: fail deployment if page content and metadata drift.
export async function verifyBuild({ pages, SITE_ORIGIN, render }) {
  const routes = Object.keys(pages);
  const titles = new Set();
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, routes.length);
  assert(!sitemap.includes('/404'));
  for (const route of routes) {
    const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    const html = await readFile(path.join('dist', file), 'utf8');
    const head = html.split('</head>')[0];
    assert.equal((head.match(/rel="canonical"/g) ?? []).length, 1, `${route}: one canonical`);
    assert(head.includes(`rel="canonical" href="${SITE_ORIGIN}${route}"`), `${route}: self canonical`);
    assert(head.includes(`property="og:url" content="${SITE_ORIGIN}${route}"`), `${route}: matching social URL`);
    assert.equal((head.match(/<title>/g) ?? []).length, 1, `${route}: one title`);
    assert(head.includes(`<title>${escapeHtml(pages[route].title)}</title>`), `${route}: correct title`);
    assert(head.includes(`name="description" content="${escapeHtml(pages[route].description)}"`), `${route}: description`);
    assert(head.includes('name="robots" content="index, follow, max-image-preview:large"'), `${route}: indexable`);
    assert(!titles.has(pages[route].title), `${route}: unique title`);
    titles.add(pages[route].title);
    assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, `${route}: rendered page heading`);
    assert(!html.includes('找不到此頁面'), `${route}: real content, not an error`);
    assert(!html.includes('<!--app-html-->'), `${route}: content rendered before JavaScript`);
    assert(!html.includes('style="opacity:0'), `${route}: content visible without JavaScript`);
    assert(sitemap.includes(`<loc>${SITE_ORIGIN}${route}</loc>`), `${route}: in sitemap`);
    assert.equal(render(route).status, 200);
    for (const [, href] of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
      if (href.startsWith('/assets/') || href.startsWith('/images/')) {
        await access(path.join('dist', href.slice(1)));
      } else {
        assert(Object.hasOwn(pages, href), `${route}: broken internal link ${href}`);
      }
    }
  }
  for (const route of ['/404', '/not-a-page', '/PROJECTS', '/News', '/constructor', '/Account/Login', '/Account/Register', '/h/ServiceDetail', '/h/albumDetail', '/projects/missing', '/news/missing', '/projects/extra/moon-world-design-supervision']) {
    const result = render(route);
    assert.equal(result.status, 404, route);
    assert(result.head.includes('noindex, follow'), `${route}: noindex`);
    assert(!result.head.includes('rel="canonical"'), `${route}: no misleading canonical`);
    assert(result.html.includes('找不到此頁面'), `${route}: not-found content`);
  }
  const errorPage = await readFile('dist/404.html', 'utf8');
  assert(errorPage.includes('找不到此頁面') && errorPage.includes('noindex, follow'));
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  assert(!config.rewrites?.length, 'No catch-all success response for missing pages');
  assert.equal(config.cleanUrls, true);
  for (const redirect of config.redirects) {
    assert(Object.hasOwn(pages, redirect.destination), `Redirect target exists: ${redirect.destination}`);
    assert.equal(redirect.permanent, true);
    assert.notEqual(redirect.destination, '/', 'Do not redirect unrelated legacy URLs to the homepage');
  }
}
