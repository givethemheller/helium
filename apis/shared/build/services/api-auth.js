"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
var jwt = __importStar(require("jsonwebtoken"));
function expressAuthentication(request, securityName, scopes) {
    if (securityName === "access_token") {
        var token = void 0;
        if (request.query && request.query.access_token) {
            token = request.query.access_token;
        }
        if (token === "abc123456") {
            return Promise.resolve({
                id: 1,
                name: "Ironman"
            });
        }
        else {
            return Promise.reject({});
        }
    }
    else if (securityName === "jwt") {
        var token_1 = request.body.token ||
            request.query.token ||
            request.headers["x-access-token"];
        return new Promise(function (resolve, reject) {
            if (!token_1) {
                reject(new Error("No token provided"));
            }
            jwt.verify(token_1, "[secret]", function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    // Check if JWT contains all required scopes
                    for (var _i = 0, scopes_1 = scopes; _i < scopes_1.length; _i++) {
                        var scope = scopes_1[_i];
                        if (!decoded.scopes.includes(scope)) {
                            reject(new Error("JWT does not contain required scope."));
                        }
                    }
                    resolve(decoded);
                }
            });
        });
    }
    else {
        return Promise.reject(new Error("No auth methods matched"));
    }
}
exports.expressAuthentication = expressAuthentication;
//# sourceMappingURL=api-auth.js.map