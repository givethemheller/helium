"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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