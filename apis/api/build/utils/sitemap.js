"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var sm = tslib_1.__importStar(require("sitemap"));
// import { transcode } from 'buffer';
function default_1(app) {
    // setup the site map tools
    var sitemap = sm.createSitemap({
        hostname: "https://localhost:3002",
        cacheTime: 1,
        urls: []
    });
    app.get("/sitemap.xml", function (_req, res, next) {
        res.send(sitemap.toXML());
    });
}
exports.default = default_1;
//# sourceMappingURL=sitemap.js.map