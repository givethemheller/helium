"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomString(length, possible) {
    if (possible === void 0) { possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; }
    var text = "";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
exports.default = randomString;
//# sourceMappingURL=randomString.js.map