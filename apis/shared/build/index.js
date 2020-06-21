"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./baseInterfaces"));
var config_1 = require("./config");
exports.config = config_1.default;
__export(require("./model-controllers/ctrl-universal"));
__export(require("./models/index"));
__export(require("./services/api-auth"));
__export(require("./utils/randomString"));
__export(require("./registeredModels"));
//# sourceMappingURL=index.js.map