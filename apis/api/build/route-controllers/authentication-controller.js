"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
var cbd_shared_1 = require("@cannabinder/cbd-shared");
var authorization_1 = require("../authentication/authorization");
var AuthenticationController = /** @class */ (function () {
    function AuthenticationController() {
    }
    // add back to authentication     // "authenticationModule": "./src/authentication.ts"
    AuthenticationController.prototype.validate = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function () { return "a returned new code"; })];
            });
        });
    };
    AuthenticationController.prototype.signIn = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, authorization_1.userSignIn(requestBody.id, requestBody.password, requestBody.mode)];
            });
        });
    };
    AuthenticationController.prototype.signup = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                // users using phone number w/ no email, don't need passwords. Required for
                // loyalty signups from kiosks
                if (requestBody.phone && !requestBody.password && !requestBody.email) {
                    return [2 /*return*/, cbd_shared_1.createDoc(cbd_shared_1.userModel, requestBody, request.res.locals.userData)];
                }
                if (!requestBody.password) {
                    throw new cbd_shared_1.ApiError("validation-error", 400, "password required");
                }
                // hash requests with passwords and save them
                return [2 /*return*/, bcrypt_1.default.hash(requestBody.password, 10).then(function (hashed) {
                        requestBody.password = hashed;
                        return cbd_shared_1.createDoc(cbd_shared_1.userModel, requestBody, request.res.locals.userData);
                    }, function (e) {
                        console.warn(e);
                        throw new cbd_shared_1.ApiError("server-error", 502, "auth controller line 41");
                    })];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt"),
        tsoa_1.Tags("authentication"),
        tsoa_1.Get("session/validation")
    ], AuthenticationController.prototype, "validate", null);
    tslib_1.__decorate([
        tsoa_1.Post("signin"),
        tsoa_1.Tags("authentication"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], AuthenticationController.prototype, "signIn", null);
    tslib_1.__decorate([
        tsoa_1.Post("signup"),
        tsoa_1.Tags("authentication"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], AuthenticationController.prototype, "signup", null);
    AuthenticationController = tslib_1.__decorate([
        tsoa_1.Route("authentication")
    ], AuthenticationController);
    return AuthenticationController;
}());
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication-controller.js.map