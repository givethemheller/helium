"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config"));
var baseUrl = function (https) {
    if (https === void 0) { https = true; }
    return https === true
        ? "https://" + config_1.default.host + ":" + config_1.default.hostPort + "/"
        : "http://" + config_1.default.host + ":" + config_1.default.hostPort + "/";
};
var getTestDBName = function () { return (process.env.NODE_ENV === "test" ? "jesttest" : ""); }; // see 'yarn test'
module.exports = {
    baseUrl: baseUrl,
    getTestDBName: getTestDBName
};
//# sourceMappingURL=environment-config.js.map