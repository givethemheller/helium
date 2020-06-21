"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var cbd_shared_1 = require("@cannabinder/cbd-shared");
var cbd_shared_2 = require("@cannabinder/cbd-shared");
var DispensaryInventoryController = /** @class */ (function () {
    function DispensaryInventoryController() {
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
    DispensaryInventoryController.prototype.AdminFindDispensaryInventory = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.dispensaryInventoryModel, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.dispensaryInventoryModel, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    DispensaryInventoryController.prototype.FindRetailInventoriess = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.dispensaryInventoryModel, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.dispensaryInventoryModel, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    DispensaryInventoryController.prototype.GetRetailInventories = function (request, DispensaryInventoryId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.findOne(cbd_shared_1.dispensaryInventoryModel, false, DispensaryInventoryId)];
            });
        });
    };
    DispensaryInventoryController.prototype.CreateRetailInventories = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.createDoc(cbd_shared_1.dispensaryInventoryModel, requestBody, request.res.locals.userData)];
            });
        });
    };
    DispensaryInventoryController.prototype.UpdateRetailInventories = function (DispensaryInventoryId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.updateDoc(cbd_shared_1.dispensaryInventoryModel, DispensaryInventoryId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    DispensaryInventoryController.prototype.deleteRetailInventories = function (DispensaryInventoryId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.deletDoc(cbd_shared_1.dispensaryInventoryModel, DispensaryInventoryId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("RetailInventories"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], DispensaryInventoryController.prototype, "AdminFindDispensaryInventory", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("RetailInventories"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], DispensaryInventoryController.prototype, "FindRetailInventoriess", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{DispensaryInventoryId}"),
        tsoa_1.Tags("RetailInventories"),
        tslib_1.__param(0, tsoa_1.Request())
    ], DispensaryInventoryController.prototype, "GetRetailInventories", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("RetailInventories"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], DispensaryInventoryController.prototype, "CreateRetailInventories", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{DispensaryInventoryId}"),
        tsoa_1.Tags("RetailInventories"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], DispensaryInventoryController.prototype, "UpdateRetailInventories", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{DispensaryInventoryId}"),
        tsoa_1.Tags("RetailInventories"),
        tslib_1.__param(1, tsoa_1.Request())
    ], DispensaryInventoryController.prototype, "deleteRetailInventories", null);
    DispensaryInventoryController = tslib_1.__decorate([
        tsoa_1.Route("inventory")
    ], DispensaryInventoryController);
    return DispensaryInventoryController;
}());
exports.DispensaryInventoryController = DispensaryInventoryController;
//# sourceMappingURL=RetailInventories-controller.js.map