"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partController = void 0;
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var api_shared_1 = require("@helium/api-shared");
var partController = /** @class */ (function () {
    function partController() {
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
    partController.prototype.AdminFindpart = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.part, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.part, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    partController.prototype.Findparts = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.part, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.part, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    partController.prototype.Getpart = function (request, partId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.findOne(api_shared_1.part, false, partId)];
            });
        });
    };
    partController.prototype.Createpart = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.createDoc(api_shared_1.part, requestBody, request.res.locals.userData)];
            });
        });
    };
    partController.prototype.Updatepart = function (partId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.updateDoc(api_shared_1.part, partId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    partController.prototype.deletepart = function (partId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.deletDoc(api_shared_1.part, partId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("part"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], partController.prototype, "AdminFindpart", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("part"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], partController.prototype, "Findparts", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{partId}"),
        tsoa_1.Tags("part"),
        tslib_1.__param(0, tsoa_1.Request())
    ], partController.prototype, "Getpart", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("part"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], partController.prototype, "Createpart", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{partId}"),
        tsoa_1.Tags("part"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], partController.prototype, "Updatepart", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{partId}"),
        tsoa_1.Tags("part"),
        tslib_1.__param(1, tsoa_1.Request())
    ], partController.prototype, "deletepart", null);
    partController = tslib_1.__decorate([
        tsoa_1.Route("part")
    ], partController);
    return partController;
}());
exports.partController = partController;
//# sourceMappingURL=part-controller.js.map