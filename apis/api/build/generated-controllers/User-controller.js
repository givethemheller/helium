"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var api_shared_1 = require("@helium/api-shared");
var userController = /** @class */ (function () {
    function userController() {
    }
    /**
     *
     * @param {object} request
     * @param {object} requestBody
     * @param {integer} page the page that is returned
     * @param {integer} count the number of records in the page
     *
     * @isInt page
     * @isInt count
     */
    userController.prototype.AdminFinduser = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.user, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.user, undefined, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     * @param {object} request
     * @param {object} requestBody
     * @param {number} page page needs description
     * @param {number} count count needs description
     *
     * @isInt page non decimal
     * @isInt count non decimal
     */
    userController.prototype.Findusers = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.user, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.user, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    userController.prototype.Getuser = function (request, userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.findOne(api_shared_1.user, false, userId)];
            });
        });
    };
    userController.prototype.Createuser = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.createDoc(api_shared_1.user, requestBody, request.res.locals.userData)];
            });
        });
    };
    userController.prototype.Updateuser = function (userId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.updateDoc(api_shared_1.user, userId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    userController.prototype.deleteuser = function (userId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.deletDoc(api_shared_1.user, userId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("user"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], userController.prototype, "AdminFinduser", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("user"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], userController.prototype, "Findusers", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{userId}"),
        tsoa_1.Tags("user"),
        tslib_1.__param(0, tsoa_1.Request())
    ], userController.prototype, "Getuser", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("user"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], userController.prototype, "Createuser", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{userId}"),
        tsoa_1.Tags("user"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], userController.prototype, "Updateuser", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{userId}"),
        tsoa_1.Tags("user"),
        tslib_1.__param(1, tsoa_1.Request())
    ], userController.prototype, "deleteuser", null);
    userController = tslib_1.__decorate([
        tsoa_1.Route("user")
    ], userController);
    return userController;
}());
exports.userController = userController;
//# sourceMappingURL=user-controller.js.map