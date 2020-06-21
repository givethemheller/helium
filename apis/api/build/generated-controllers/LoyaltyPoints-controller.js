"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var cbd_shared_1 = require("@cannabinder/cbd-shared");
var cbd_shared_2 = require("@cannabinder/cbd-shared");
var LoyaltyPointOfferController = /** @class */ (function () {
    function LoyaltyPointOfferController() {
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
    LoyaltyPointOfferController.prototype.AdminFindLoyaltyPointOffer = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyPointOfferModel, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyPointOfferModel, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    LoyaltyPointOfferController.prototype.FindLoyaltyPointss = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyPointOfferModel, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyPointOfferModel, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    LoyaltyPointOfferController.prototype.GetLoyaltyPoints = function (request, LoyaltyPointOfferId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.findOne(cbd_shared_1.loyaltyPointOfferModel, false, LoyaltyPointOfferId)];
            });
        });
    };
    LoyaltyPointOfferController.prototype.CreateLoyaltyPoints = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.createDoc(cbd_shared_1.loyaltyPointOfferModel, requestBody, request.res.locals.userData)];
            });
        });
    };
    LoyaltyPointOfferController.prototype.UpdateLoyaltyPoints = function (LoyaltyPointOfferId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.updateDoc(cbd_shared_1.loyaltyPointOfferModel, LoyaltyPointOfferId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    LoyaltyPointOfferController.prototype.deleteLoyaltyPoints = function (LoyaltyPointOfferId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.deletDoc(cbd_shared_1.loyaltyPointOfferModel, LoyaltyPointOfferId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("LoyaltyPoints"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], LoyaltyPointOfferController.prototype, "AdminFindLoyaltyPointOffer", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("LoyaltyPoints"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], LoyaltyPointOfferController.prototype, "FindLoyaltyPointss", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{LoyaltyPointOfferId}"),
        tsoa_1.Tags("LoyaltyPoints"),
        tslib_1.__param(0, tsoa_1.Request())
    ], LoyaltyPointOfferController.prototype, "GetLoyaltyPoints", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("LoyaltyPoints"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], LoyaltyPointOfferController.prototype, "CreateLoyaltyPoints", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{LoyaltyPointOfferId}"),
        tsoa_1.Tags("LoyaltyPoints"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], LoyaltyPointOfferController.prototype, "UpdateLoyaltyPoints", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{LoyaltyPointOfferId}"),
        tsoa_1.Tags("LoyaltyPoints"),
        tslib_1.__param(1, tsoa_1.Request())
    ], LoyaltyPointOfferController.prototype, "deleteLoyaltyPoints", null);
    LoyaltyPointOfferController = tslib_1.__decorate([
        tsoa_1.Route("point-offers")
    ], LoyaltyPointOfferController);
    return LoyaltyPointOfferController;
}());
exports.LoyaltyPointOfferController = LoyaltyPointOfferController;
//# sourceMappingURL=LoyaltyPoints-controller.js.map