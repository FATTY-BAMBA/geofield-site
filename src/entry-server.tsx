/* eslint-disable react-refresh/only-export-components -- Build-only entry; never loaded by Fast Refresh. */
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { getPageMeta } from "./data/seo";

export { pages, SITE_ORIGIN, getPageMeta } from "./data/seo";

export function render(pathname: string) {
  const meta = getPageMeta(pathname);
  const head = renderToStaticMarkup(
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={meta.robots} />
      {meta.canonical && <link rel="canonical" href={meta.canonical} />}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={meta.type} />
      {meta.canonical && <meta property="og:url" content={meta.canonical} />}
    </>
  );
  const html = renderToString(<StaticRouter location={pathname}><App /></StaticRouter>);
  return { head, html, status: meta.status };
}
