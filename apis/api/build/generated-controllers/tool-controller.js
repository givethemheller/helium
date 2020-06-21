"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolController = void 0;
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var api_shared_1 = require("@helium/api-shared");
var toolController = /** @class */ (function () {
    function toolController() {
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
    toolController.prototype.AdminFindtool = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.tool, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.tool, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    toolController.prototype.Findtools = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.tool, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.tool, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    toolController.prototype.Gettool = function (request, toolId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.findOne(api_shared_1.tool, false, toolId)];
            });
        });
    };
    toolController.prototype.Createtool = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.createDoc(api_shared_1.tool, requestBody, request.res.locals.userData)];
            });
        });
    };
    toolController.prototype.Updatetool = function (toolId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.updateDoc(api_shared_1.tool, toolId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    toolController.prototype.deletetool = function (toolId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.deletDoc(api_shared_1.tool, toolId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("tool"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], toolController.prototype, "AdminFindtool", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("tool"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], toolController.prototype, "Findtools", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{toolId}"),
        tsoa_1.Tags("tool"),
        tslib_1.__param(0, tsoa_1.Request())
    ], toolController.prototype, "Gettool", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("tool"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], toolController.prototype, "Createtool", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{toolId}"),
        tsoa_1.Tags("tool"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], toolController.prototype, "Updatetool", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{toolId}"),
        tsoa_1.Tags("tool"),
        tslib_1.__param(1, tsoa_1.Request())
    ], toolController.prototype, "deletetool", null);
    toolController = tslib_1.__decorate([
        tsoa_1.Route("tool")
    ], toolController);
    return toolController;
}());
exports.toolController = toolController;
//# sourceMappingURL=tool-controller.js.map