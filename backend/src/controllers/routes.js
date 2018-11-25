import { Router } from "express";
let Parser = require("rss-parser");
let parser = new Parser();

const routes = Router();

/**
 * GET home page
 */
routes.get("/", (req, res) => {
  res.json({ message: "Welcome to starter-backend!" });
});

/**
 * Get blog posts backend
 */
routes.get("/blog/posts", (req, res) => {
  (async () => {
    let rss = await parser.parseURL("https://medium.com/feed/@joeltonghaowen");
    return res.jsonp(rss);
  })();
});

export default routes;
