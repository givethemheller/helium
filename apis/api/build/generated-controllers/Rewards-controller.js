"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var cbd_shared_1 = require("@cannabinder/cbd-shared");
var cbd_shared_2 = require("@cannabinder/cbd-shared");
var LoyaltyOfferController = /** @class */ (function () {
    function LoyaltyOfferController() {
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
    LoyaltyOfferController.prototype.AdminFindLoyaltyOffer = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyOfferModel, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyOfferModel, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    LoyaltyOfferController.prototype.FindRewardss = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyOfferModel, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyOfferModel, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    LoyaltyOfferController.prototype.GetRewards = function (request, LoyaltyOfferId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.findOne(cbd_shared_1.loyaltyOfferModel, false, LoyaltyOfferId)];
            });
        });
    };
    LoyaltyOfferController.prototype.CreateRewards = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.createDoc(cbd_shared_1.loyaltyOfferModel, requestBody, request.res.locals.userData)];
            });
        });
    };
    LoyaltyOfferController.prototype.UpdateRewards = function (LoyaltyOfferId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.updateDoc(cbd_shared_1.loyaltyOfferModel, LoyaltyOfferId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    LoyaltyOfferController.prototype.deleteRewards = function (LoyaltyOfferId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.deletDoc(cbd_shared_1.loyaltyOfferModel, LoyaltyOfferId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("Rewards"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], LoyaltyOfferController.prototype, "AdminFindLoyaltyOffer", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("Rewards"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], LoyaltyOfferController.prototype, "FindRewardss", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{LoyaltyOfferId}"),
        tsoa_1.Tags("Rewards"),
        tslib_1.__param(0, tsoa_1.Request())
    ], LoyaltyOfferController.prototype, "GetRewards", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("Rewards"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], LoyaltyOfferController.prototype, "CreateRewards", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{LoyaltyOfferId}"),
        tsoa_1.Tags("Rewards"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], LoyaltyOfferController.prototype, "UpdateRewards", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{LoyaltyOfferId}"),
        tsoa_1.Tags("Rewards"),
        tslib_1.__param(1, tsoa_1.Request())
    ], LoyaltyOfferController.prototype, "deleteRewards", null);
    LoyaltyOfferController = tslib_1.__decorate([
        tsoa_1.Route("rewards")
    ], LoyaltyOfferController);
    return LoyaltyOfferController;
}());
exports.LoyaltyOfferController = LoyaltyOfferController;
//# sourceMappingURL=Rewards-controller.js.map