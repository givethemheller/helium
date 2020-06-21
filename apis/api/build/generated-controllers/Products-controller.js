"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var cbd_shared_1 = require("@cannabinder/cbd-shared");
var cbd_shared_2 = require("@cannabinder/cbd-shared");
var ProductController = /** @class */ (function () {
    function ProductController() {
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
    ProductController.prototype.AdminFindProduct = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.productModel, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.productModel, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    ProductController.prototype.FindProductss = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.productModel, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.productModel, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    ProductController.prototype.GetProducts = function (request, ProductId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.findOne(cbd_shared_1.productModel, false, ProductId)];
            });
        });
    };
    ProductController.prototype.CreateProducts = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.createDoc(cbd_shared_1.productModel, requestBody, request.res.locals.userData)];
            });
        });
    };
    ProductController.prototype.UpdateProducts = function (ProductId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.updateDoc(cbd_shared_1.productModel, ProductId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    ProductController.prototype.deleteProducts = function (ProductId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.deletDoc(cbd_shared_1.productModel, ProductId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("Products"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], ProductController.prototype, "AdminFindProduct", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("Products"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], ProductController.prototype, "FindProductss", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{ProductId}"),
        tsoa_1.Tags("Products"),
        tslib_1.__param(0, tsoa_1.Request())
    ], ProductController.prototype, "GetProducts", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("Products"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], ProductController.prototype, "CreateProducts", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{ProductId}"),
        tsoa_1.Tags("Products"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], ProductController.prototype, "UpdateProducts", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{ProductId}"),
        tsoa_1.Tags("Products"),
        tslib_1.__param(1, tsoa_1.Request())
    ], ProductController.prototype, "deleteProducts", null);
    ProductController = tslib_1.__decorate([
        tsoa_1.Route("products")
    ], ProductController);
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=Products-controller.js.map