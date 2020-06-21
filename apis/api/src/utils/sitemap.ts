import * as express from "express";
import * as sm from "sitemap";
// import { transcode } from 'buffer';

export default function (app: express.Express) {
  // setup the site map tools
  const sitemap = sm.createSitemap({
    hostname: "https://localhost:3002",
    cacheTime: 1, // 600 sec - cache purge period
    urls: []
  });

  app.get("/sitemap.xml", function (
    _req: any,
    res: any,
    next: (err: any) => void
  ) {
    res.send(sitemap.toXML());
  });
}
