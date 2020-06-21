"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var cbd_shared_1 = require("@cannabinder/cbd-shared");
var cbd_shared_2 = require("@cannabinder/cbd-shared");
var TestResultController = /** @class */ (function () {
    function TestResultController() {
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
    TestResultController.prototype.AdminFindTestResult = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.testResultModel, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.testResultModel, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    TestResultController.prototype.FindAnalyticss = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.testResultModel, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, cbd_shared_2.findMany(cbd_shared_1.testResultModel, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    TestResultController.prototype.GetAnalytics = function (request, TestResultId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.findOne(cbd_shared_1.testResultModel, false, TestResultId)];
            });
        });
    };
    TestResultController.prototype.CreateAnalytics = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.createDoc(cbd_shared_1.testResultModel, requestBody, request.res.locals.userData)];
            });
        });
    };
    TestResultController.prototype.UpdateAnalytics = function (TestResultId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.updateDoc(cbd_shared_1.testResultModel, TestResultId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    TestResultController.prototype.deleteAnalytics = function (TestResultId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, cbd_shared_2.deletDoc(cbd_shared_1.testResultModel, TestResultId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("Analytics"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], TestResultController.prototype, "AdminFindTestResult", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("Analytics"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], TestResultController.prototype, "FindAnalyticss", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{TestResultId}"),
        tsoa_1.Tags("Analytics"),
        tslib_1.__param(0, tsoa_1.Request())
    ], TestResultController.prototype, "GetAnalytics", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("Analytics"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], TestResultController.prototype, "CreateAnalytics", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{TestResultId}"),
        tsoa_1.Tags("Analytics"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], TestResultController.prototype, "UpdateAnalytics", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{TestResultId}"),
        tsoa_1.Tags("Analytics"),
        tslib_1.__param(1, tsoa_1.Request())
    ], TestResultController.prototype, "deleteAnalytics", null);
    TestResultController = tslib_1.__decorate([
        tsoa_1.Route("analytics")
    ], TestResultController);
    return TestResultController;
}());
exports.TestResultController = TestResultController;
//# sourceMappingURL=Analytics-controller.js.map