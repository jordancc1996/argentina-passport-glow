#!/usr/bin/env node
/**
 * Auto-generates public/sitemap.xml from React Router route definitions
 * and dynamic content sources (blog posts, FAQ entries, industry news).
 *
 * Runs automatically via `prebuild` before every Vercel build.
 *
 * Excludes any path configured as a 301/302 redirect in vercel.json
 * (e.g. /blog, /guides) and any internal/catch-all routes.
 */

import { readFileSync, writeFileSync, statSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const BASE_URL = "https://argentinaresidence.com";
const TODAY = new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------------------
// 1. Parse route paths from src/App.tsx
// ---------------------------------------------------------------------------
function parseRoutes() {
  const appSrc = readFileSync(resolve(ROOT, "src/App.tsx"), "utf8");
  const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{([^}]+)\}/g;
  const paths = [];
  let m;
  while ((m = routeRegex.exec(appSrc)) !== null) {
    const [, path, element] = m;
    // Skip catch-all, dynamic param routes (handled separately),
    // and any route whose element is <Navigate ... /> (client-side redirect).
    if (path === "*") continue;
    if (path.includes(":")) continue;
    if (/Navigate\s+to=/.test(element)) continue;
    paths.push(path);
  }
  return paths;
}

// ---------------------------------------------------------------------------
// 2. Parse redirect sources from vercel.json (exclude any matching route)
// ---------------------------------------------------------------------------
function parseRedirectSources() {
  const vercel = JSON.parse(readFileSync(resolve(ROOT, "vercel.json"), "utf8"));
  return new Set(
    (vercel.redirects || [])
      .map((r) => r.source)
      .filter((s) => s && !s.includes(":") && !s.includes("*"))
  );
}

// ---------------------------------------------------------------------------
// 3. Extract slugs + dates from dynamic data sources via regex
//    (avoids needing to bundle TS at build time)
// ---------------------------------------------------------------------------
function extractEntries(filePath) {
  const src = readFileSync(resolve(ROOT, filePath), "utf8");
  const entries = [];
  // Split into per-object chunks anchored at `id:` (each entry starts with `id: <n>`)
  // so slug/date order inside the object doesn't matter.
  const chunks = src.split(/\n\s*\{\s*\n?\s*id:\s*\d+/).slice(1);
  for (const chunk of chunks) {
    const slug = chunk.match(/slug:\s*"([^"]+)"/);
    const date = chunk.match(/date:\s*"([^"]+)"/);
    if (slug) entries.push({ slug: slug[1], date: date ? date[1] : TODAY });
  }
  return entries;
}

function extractFaqSlugs() {
  const src = readFileSync(resolve(ROOT, "src/data/faqData.ts"), "utf8");
  const slugs = [];
  const re = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    if (m[1] !== "string") slugs.push(m[1]);
  }
  return slugs;
}

// ---------------------------------------------------------------------------
// 4. Resolve lastmod: file mtime if locatable, else today
// ---------------------------------------------------------------------------
function fileLastMod(candidatePaths) {
  for (const p of candidatePaths) {
    const full = resolve(ROOT, p);
    if (existsSync(full)) {
      try {
        return statSync(full).mtime.toISOString().slice(0, 10);
      } catch {}
    }
  }
  return TODAY;
}

// ---------------------------------------------------------------------------
// 5. Build entry set
// ---------------------------------------------------------------------------
function buildEntries() {
  const redirectSources = parseRedirectSources();
  const routes = parseRoutes().filter((p) => !redirectSources.has(p));

  const staticPriorities = {
    "/": "1.0",
    "/faq": "0.8",
    "/program": "0.8",
    "/guides/argentina-golden-visa-program": "0.8",
    "/guides/argentina-real-estate-investment": "0.8",
    "/argentina-golden-visa-eligibility-checker": "0.8",
  };

  const entries = [];

  // Static routes
  for (const path of routes) {
    const priority = staticPriorities[path] ?? "0.7";
    entries.push({
      loc: `${BASE_URL}${path === "/" ? "/" : path}`,
      lastmod: fileLastMod([
        `src/pages${path === "/" ? "/Index" : path}.tsx`,
      ]),
      changefreq: path === "/" ? "weekly" : "monthly",
      priority,
    });
  }

  // FAQ detail pages
  for (const slug of extractFaqSlugs()) {
    entries.push({
      loc: `${BASE_URL}/faq/${slug}`,
      lastmod: fileLastMod(["src/data/faqData.ts"]),
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  // Blog posts
  for (const { slug, date } of extractEntries("src/data/blogData.ts")) {
    entries.push({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: date || TODAY,
      changefreq: "weekly",
      priority: "0.6",
    });
  }

  // Industry news articles
  for (const { slug, date } of extractEntries("src/data/news.ts")) {
    entries.push({
      loc: `${BASE_URL}/industry-news/${slug}`,
      lastmod: date || TODAY,
      changefreq: "weekly",
      priority: "0.6",
    });
  }

  // De-duplicate by loc
  const seen = new Set();
  return entries.filter((e) => {
    if (seen.has(e.loc)) return false;
    seen.add(e.loc);
    return true;
  });
}

// ---------------------------------------------------------------------------
// 6. Render XML
// ---------------------------------------------------------------------------
function renderSitemap(entries) {
  const urls = entries
    .map(
      (e) =>
        `  <url>\n` +
        `    <loc>${e.loc}</loc>\n` +
        `    <lastmod>${e.lastmod}</lastmod>\n` +
        `    <changefreq>${e.changefreq}</changefreq>\n` +
        `    <priority>${e.priority}</priority>\n` +
        `  </url>`
    )
    .join("\n");
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urls}\n` +
    `</urlset>\n`
  );
}

const entries = buildEntries();
writeFileSync(resolve(ROOT, "public/sitemap.xml"), renderSitemap(entries));
console.log(`✓ sitemap.xml generated with ${entries.length} URLs`);