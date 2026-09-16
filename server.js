const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 10000;
const publicDir = path.join(__dirname, "public");

app.disable("x-powered-by");

/*
 * SEO files must be served explicitly BEFORE the SPA fallback.
 * This guarantees Google receives XML/text instead of index.html.
 */
app.get("/sitemap.xml", (_req, res) => {
  res.type("application/xml");
  res.set("Cache-Control", "public, max-age=300");
  res.sendFile(path.join(publicDir, "sitemap.xml"));
});

app.get("/robots.txt", (_req, res) => {
  res.type("text/plain; charset=utf-8");
  res.set("Cache-Control", "public, max-age=300");
  res.sendFile(path.join(publicDir, "robots.txt"));
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "moving-match-web" });
});

app.use(express.static(publicDir, {
  maxAge: "1h",
  index: "index.html"
}));

// Keep this LAST so it cannot swallow sitemap.xml or robots.txt.
app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Moving-Match web listening on ${port}`);
});
