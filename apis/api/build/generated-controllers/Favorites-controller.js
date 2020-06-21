"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var cbd_shared_1 = require("@cannabinder/cbd-shared");
var cbd_shared_2 = require("@cannabinder/cbd-shared");
var BinderItemController = /** @class */ (function () {
    function BinderItemController() {
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
    BinderItemController.prototype.AdminFindBinderItem = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.binderItemModel, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.binderItemModel, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    BinderItemController.prototype.FindFavoritess = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.binderItemModel, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.binderItemModel, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    BinderItemController.prototype.GetFavorites = function (request, BinderItemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.findOne(cbd_shared_1.binderItemModel, false, BinderItemId)];
            });
        });
    };
    BinderItemController.prototype.CreateFavorites = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.createDoc(cbd_shared_1.binderItemModel, requestBody, request.res.locals.userData)];
            });
        });
    };
    BinderItemController.prototype.UpdateFavorites = function (BinderItemId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.updateDoc(cbd_shared_1.binderItemModel, BinderItemId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    BinderItemController.prototype.deleteFavorites = function (BinderItemId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.deletDoc(cbd_shared_1.binderItemModel, BinderItemId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("Favorites"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], BinderItemController.prototype, "AdminFindBinderItem", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("Favorites"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], BinderItemController.prototype, "FindFavoritess", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{BinderItemId}"),
        tsoa_1.Tags("Favorites"),
        tslib_1.__param(0, tsoa_1.Request())
    ], BinderItemController.prototype, "GetFavorites", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("Favorites"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], BinderItemController.prototype, "CreateFavorites", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{BinderItemId}"),
        tsoa_1.Tags("Favorites"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], BinderItemController.prototype, "UpdateFavorites", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{BinderItemId}"),
        tsoa_1.Tags("Favorites"),
        tslib_1.__param(1, tsoa_1.Request())
    ], BinderItemController.prototype, "deleteFavorites", null);
    BinderItemController = tslib_1.__decorate([
        tsoa_1.Route("favorites")
    ], BinderItemController);
    return BinderItemController;
}());
exports.BinderItemController = BinderItemController;
//# sourceMappingURL=Favorites-controller.js.map