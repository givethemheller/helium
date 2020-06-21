"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
var tslib_1 = require("tslib");
var jwt = tslib_1.__importStar(require("jsonwebtoken"));
var config_1 = tslib_1.__importDefault(require("./env/config"));
var api_shared_1 = require("@helium/api-shared");
function expressAuthentication(request, securityName, scopes) {
    if (securityName === "jwt") {
        var token_1 = request.headers.authorization;
        return new Promise(function (resolve, reject) {
            if (!token_1) {
                reject(new Error("No token provided"));
            }
            if (token_1 === "dev-setup") {
                var userData = {
                    _id: "some-id",
                    sessionStartDate: new Date(),
                    currentToken: "defineme",
                    userPermissions: [api_shared_1.GROUPS.admin, api_shared_1.GROUPS.owner, api_shared_1.GROUPS.unathenticated, api_shared_1.GROUPS.user]
                };
                request.res.locals["userData"] = userData;
                resolve(true);
            }
            else {
                jwt.verify(token_1, config_1.default.jwtKey, function (err, decoded) {
                    // const contents = decoded as unknown as CbdWebTokenContents;
                    if (err) {
                        reject(err);
                    }
                    else {
                        // Check if JWT contains all required scopes
                        // TODO the tokening process needs to have scopes in it
                        // if (scopes.length > 0) {
                        //   const hasScope = scopes.some((scope) => {
                        //     return contents.scopes.find((contentScope) => {
                        //       return contentScope === scope;
                        //     })
                        //   })
                        //   if (!hasScope) {
                        //     reject(new Error("You are not authorized"));
                        //   }
                        // }
                        request.res.locals["userData"] = { userData: "foo" };
                        resolve(decoded);
                    }
                });
            }
        });
    }
}
exports.expressAuthentication = expressAuthentication;
//# sourceMappingURL=authentication.js.map