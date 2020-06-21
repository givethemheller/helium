"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./baseInterfaces"), exports);
var config_1 = require("./config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return config_1.default; } });
__exportStar(require("./model-controllers/ctrl-universal"), exports);
__exportStar(require("./models/index"), exports);
__exportStar(require("./services/api-auth"), exports);
__exportStar(require("./utils/environment-config"), exports);
__exportStar(require("./utils/randomString"), exports);
__exportStar(require("./typings"), exports);
__exportStar(require("./registeredModels"), exports);
//# sourceMappingURL=index.js.map