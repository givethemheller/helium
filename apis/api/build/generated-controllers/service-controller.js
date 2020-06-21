"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var api_shared_1 = require("@helium/api-shared");
var serviceController = /** @class */ (function () {
    function serviceController() {
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
    serviceController.prototype.AdminFindservice = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.service, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.service, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    serviceController.prototype.Findservices = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.service, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.service, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    serviceController.prototype.Getservice = function (request, serviceId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.findOne(api_shared_1.service, false, serviceId)];
            });
        });
    };
    serviceController.prototype.Createservice = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.createDoc(api_shared_1.service, requestBody, request.res.locals.userData)];
            });
        });
    };
    serviceController.prototype.Updateservice = function (serviceId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.updateDoc(api_shared_1.service, serviceId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    serviceController.prototype.deleteservice = function (serviceId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.deletDoc(api_shared_1.service, serviceId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("service"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], serviceController.prototype, "AdminFindservice", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("service"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], serviceController.prototype, "Findservices", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{serviceId}"),
        tsoa_1.Tags("service"),
        tslib_1.__param(0, tsoa_1.Request())
    ], serviceController.prototype, "Getservice", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("service"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], serviceController.prototype, "Createservice", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{serviceId}"),
        tsoa_1.Tags("service"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], serviceController.prototype, "Updateservice", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{serviceId}"),
        tsoa_1.Tags("service"),
        tslib_1.__param(1, tsoa_1.Request())
    ], serviceController.prototype, "deleteservice", null);
    serviceController = tslib_1.__decorate([
        tsoa_1.Route("service")
    ], serviceController);
    return serviceController;
}());
exports.serviceController = serviceController;
//# sourceMappingURL=service-controller.js.map