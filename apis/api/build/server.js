"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var app_1 = tslib_1.__importDefault(require("./app"));
var http_1 = tslib_1.__importDefault(require("http"));
var config_1 = tslib_1.__importDefault(require("./env/config"));
var mongoConnect_1 = tslib_1.__importDefault(require("./mongoConnect"));
mongoConnect_1.default().then(function () {
    var server = http_1.default.createServer(app_1.default);
    server.listen(config_1.default.hostPort);
}, function () {
    throw new Error("Failed to connect to mongo db");
});
//# sourceMappingURL=server.js.map