// Minimal static file server for the smoke test: serves a static Storybook build
// under a path prefix, as GitHub Pages serves this project site.
// GET/HEAD only, bound to 127.0.0.1, no directory listings, no path traversal.
// usage: node tests/serve-storybook.mjs <dir> <port> [prefix]
import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { join, normalize, extname, resolve, sep } from "node:path";

const [dirArg, portArg, prefixArg = ""] = process.argv.slice(2);
if (!dirArg || !portArg) {
  console.error("usage: node tests/serve-storybook.mjs <dir> <port> [prefix]");
  process.exit(2);
}
const root = resolve(dirArg);
const prefix = prefixArg.replace(/\/$/, "");
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".txt": "text/plain; charset=utf-8",
};

createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { allow: "GET, HEAD" }).end();
    return;
  }
  let path;
  try {
    path = decodeURIComponent(new URL(req.url, "http://127.0.0.1").pathname);
  } catch {
    res.writeHead(400).end();
    return;
  }
  if (prefix) {
    if (path === prefix) {
      res.writeHead(301, { location: `${prefix}/` }).end();
      return;
    }
    if (!path.startsWith(`${prefix}/`)) {
      res.writeHead(404).end("not found");
      return;
    }
    path = path.slice(prefix.length);
  }
  let file = normalize(join(root, path));
  if (file !== root && !file.startsWith(root + sep)) {
    res.writeHead(403).end();
    return;
  }
  let stat;
  try {
    stat = statSync(file);
    if (stat.isDirectory()) {
      file = join(file, "index.html");
      stat = statSync(file);
    }
  } catch {
    res.writeHead(404).end("not found");
    return;
  }
  res.writeHead(200, {
    "content-type": TYPES[extname(file).toLowerCase()] ?? "application/octet-stream",
    "content-length": stat.size,
    "cache-control": "no-store",
  });
  if (req.method === "HEAD") {
    res.end();
    return;
  }
  createReadStream(file).pipe(res);
}).listen(Number(portArg), "127.0.0.1", () => {
  console.log(`serving ${root} at http://127.0.0.1:${portArg}${prefix}/`);
});
