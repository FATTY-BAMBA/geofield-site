# Search indexing repair — 2026-09-17

## Observed, before this change

Search Console's report was last updated on September 14, 2026: 7 indexed URLs and 15 excluded URLs. The 8 soft 404 examples were legacy `/h/*` URLs, crawled February–May 2026. The 3 duplicate examples were retired `/Account/Login` and `/Account/Register` URLs. The two homepage redirects (HTTP and the non-www HTTPS domain) correctly reach `https://www.geofield.tw/`.

Current URLs requiring follow-up: `/projects` was crawled September 13 but not indexed; `/contact` was discovered but not yet crawled. These labels alone do not establish why Google excluded them.

Public HTTP checks found that valid deep links and arbitrary invalid URLs all returned HTTP 200 with the homepage's empty app shell, title, and canonical. JavaScript later replaced the metadata; the catch-all route displayed the homepage for unknown paths.

## Implementation

- Build all 28 current routes as HTML with real page content, one self-referencing canonical, unique title/description, and matching Open Graph URL. The canonical origin remains `https://www.geofield.tw`.
- Share the route metadata registry between the build and client-side navigation. Generate the sitemap from this registry, including only real detail pages.
- Hydrate the initial HTML to retain navigation, filtering, slideshow, form, and gallery behavior. Content is visible before JavaScript; scroll reveals enhance offscreen content only. Initial statistics contain their actual values.
- Use Vercel static hosting (`framework: null`, `outputDirectory: dist`, clean URLs, no trailing slash). Remove the catch-all rewrite. Emit `404.html` for unmatched requests, with a helpful page and `noindex` but no misleading canonical. Unknown client routes and unknown project/news slugs show the same page.
- Preserve existing HTTP/non-www domain normalization.
- Legacy album index/category listings at `/h/Album` consolidate into `/projects` with a permanent 308 redirect. The generic `/h/about` index redirects permanently to `/about` only when no `cont` detail identifier is supplied. Inherited query parameters do not enter canonical URLs.
- Retired account pages and unmatched legacy detail URLs return 404. Do not invent content-ID mappings or redirect unrelated details to the homepage.

## Legacy detail mappings still unknown

The original content behind these IDs could not be verified from the current repository. Return 404 unless a verified equivalent is identified later:

- `/h/about?key=897807587789&cont=422332`
- `/h/ServiceDetail?key=897807587789&cont=117191`
- `/h/albumDetail?key=897807587789&cont=433076`
- `/h/albumDetail?key=897807587789&cont=423072`

If an old backup identifies a matching current page, add a query-specific permanent redirect. A legitimate 404 for removed content is an expected exclusion, not a page that should be forced into the index.

## Verification

`npm run build` includes regression checks for every page's initial HTML, canonical, title, description, indexability, heading, internal links and sitemap membership. It also checks unknown paths, retired accounts, unknown detail slugs, nested invalid paths and case variants for not-found content/noindex. TypeScript and targeted lint checks pass. Full-repository lint has 8 existing errors in unused `src/components/ui/*` files.

Local browser checks cover hydration, slideshow rotation, project filtering, direct project loading, and error-page recovery (which restores normal canonical/index metadata). Final HTTP routing must be checked on the Vercel preview; Vite's development/preview SPA fallback does not represent production missing-page routing.

## Release and Google follow-up

This change is prepared for preview. Do not start Search Console validation while the main domain still serves the old behavior.

After the user approves production release:

1. Promote the verified preview to production.
2. Recheck representative current, legacy, and invalid URLs on the live domain: current pages 200 with matching raw HTML/canonical; intended legacy redirects 308 to relevant 200 pages; removed/invalid URLs 404; sitemap 200; no accidental `noindex` on valid production pages or HTTP headers.
3. Submit/re-submit `https://www.geofield.tw/sitemap.xml` in Search Console.
4. Inspect `/projects` and `/contact`, run the live URL test, then request indexing for those current pages.
5. Start validation for soft 404 and duplicate groups after the live checks pass. Do not request indexing for retired URLs or normal redirect sources.
6. Allow Google to recrawl and reassess. Report counts are delayed; indexing and timing cannot be guaranteed. Correct 404s and redirects can remain listed as expected exclusions.

References:
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- https://support.google.com/webmasters/answer/7440203
- https://vercel.com/kb/guide/custom-404-page
- https://vercel.com/docs/project-configuration/vercel-json
