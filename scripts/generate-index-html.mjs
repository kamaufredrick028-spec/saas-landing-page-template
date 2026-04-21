// Post-build: generate static index.html for SPA hosting on Vercel.
// TanStack Start's Vite plugin builds for SSR by default and does not emit
// an index.html for the client bundle. Since we deploy as a static SPA on
// Vercel, we synthesize one here from the built assets in dist/client/assets.
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(clientDir, "assets");

if (!existsSync(assetsDir)) {
  console.error("[build:html] dist/client/assets not found. Did vite build run?");
  process.exit(1);
}

const files = readdirSync(assetsDir);
const css = files.filter((f) => f.endsWith(".css")).map((f) => `/assets/${f}`);
// Pick the largest JS file as the main entry (router + app code).
const jsFiles = files.filter((f) => f.endsWith(".js"));
if (jsFiles.length === 0) {
  console.error("[build:html] No JS files found in dist/client/assets.");
  process.exit(1);
}
const jsEntries = jsFiles.map((f) => `/assets/${f}`);

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Salix — Smartest Way to Bring Best ROI for Sales</title>
    <meta name="description" content="Salix helps sales teams streamline every step — automate, track deals, and close more with AI-powered tools." />
    ${css.map((href) => `<link rel="stylesheet" href="${href}" />`).join("\n    ")}
    ${jsEntries.map((src) => `<link rel="modulepreload" href="${src}" />`).join("\n    ")}
  </head>
  <body>
    <div id="root"></div>
    ${jsEntries.map((src) => `<script type="module" src="${src}"></script>`).join("\n    ")}
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log("[build:html] Wrote dist/client/index.html");
