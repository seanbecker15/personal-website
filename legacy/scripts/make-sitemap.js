/* eslint-disable */

const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");

const routes = require("../src/routes/routes.json");

const DOCUMENT_TEMPLATE = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
const URL_TEMPLATE = `<url><loc>{{loc}}</loc></url>`;

const xml = cheerio.load(
  DOCUMENT_TEMPLATE,
  {
    xmlMode: true,
  },
  false
);

const makeUrlNode = (loc = "", lastmod = "", changefreq = "", priority = "") =>
  URL_TEMPLATE.replace("{{loc}}", loc)
    .replace("{{lastmod}}", lastmod)
    .replace("{{changefreq}}", changefreq)
    .replace("{{priority}}", priority);

const makeSitemap = (prevPath, tree) => {
  const keys = Object.keys(tree);

  keys.forEach((key) => {
    const value = tree[key];
    const { path, children = {} } = value;
    xml("urlset").append(makeUrlNode(prevPath + "/" + path));
    makeSitemap(prevPath + path, children);
  });
};

makeSitemap("https://seanbecker.me", routes);

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml.xml(), {
  encoding: "utf-8",
});
