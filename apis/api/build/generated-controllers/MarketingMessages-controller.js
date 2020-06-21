"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var cbd_shared_1 = require("@cannabinder/cbd-shared");
var cbd_shared_2 = require("@cannabinder/cbd-shared");
var LoyaltyMessageController = /** @class */ (function () {
    function LoyaltyMessageController() {
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
    LoyaltyMessageController.prototype.AdminFindLoyaltyMessage = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyMessageModel, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyMessageModel, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    LoyaltyMessageController.prototype.FindMarketingMessagess = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyMessageModel, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.loyaltyMessageModel, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    LoyaltyMessageController.prototype.GetMarketingMessages = function (request, LoyaltyMessageId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.findOne(cbd_shared_1.loyaltyMessageModel, false, LoyaltyMessageId)];
            });
        });
    };
    LoyaltyMessageController.prototype.CreateMarketingMessages = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.createDoc(cbd_shared_1.loyaltyMessageModel, requestBody, request.res.locals.userData)];
            });
        });
    };
    LoyaltyMessageController.prototype.UpdateMarketingMessages = function (LoyaltyMessageId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.updateDoc(cbd_shared_1.loyaltyMessageModel, LoyaltyMessageId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    LoyaltyMessageController.prototype.deleteMarketingMessages = function (LoyaltyMessageId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.deletDoc(cbd_shared_1.loyaltyMessageModel, LoyaltyMessageId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("MarketingMessages"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], LoyaltyMessageController.prototype, "AdminFindLoyaltyMessage", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("MarketingMessages"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], LoyaltyMessageController.prototype, "FindMarketingMessagess", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{LoyaltyMessageId}"),
        tsoa_1.Tags("MarketingMessages"),
        tslib_1.__param(0, tsoa_1.Request())
    ], LoyaltyMessageController.prototype, "GetMarketingMessages", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("MarketingMessages"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], LoyaltyMessageController.prototype, "CreateMarketingMessages", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{LoyaltyMessageId}"),
        tsoa_1.Tags("MarketingMessages"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], LoyaltyMessageController.prototype, "UpdateMarketingMessages", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{LoyaltyMessageId}"),
        tsoa_1.Tags("MarketingMessages"),
        tslib_1.__param(1, tsoa_1.Request())
    ], LoyaltyMessageController.prototype, "deleteMarketingMessages", null);
    LoyaltyMessageController = tslib_1.__decorate([
        tsoa_1.Route("messages")
    ], LoyaltyMessageController);
    return LoyaltyMessageController;
}());
exports.LoyaltyMessageController = LoyaltyMessageController;
//# sourceMappingURL=MarketingMessages-controller.js.map