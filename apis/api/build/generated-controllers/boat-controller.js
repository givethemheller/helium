"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var api_shared_1 = require("@helium/api-shared");
var boatController = /** @class */ (function () {
    function boatController() {
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
    boatController.prototype.AdminFindboat = function (request, page, count) {
        if (page === void 0) { page = 1; }
        if (count === void 0) { count = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.boat, false, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.boat, undefined, undefined, undefined, undefined, request.res.locals.userData)];
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
    boatController.prototype.Findboats = function (request, requestBody, page, count) {
        if (page === void 0) { page = 0; }
        if (count === void 0) { count = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (page && count) {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.boat, requestBody.conditions, false, {
                            count: count,
                            page: page
                        }, undefined, request.res.locals.userData)];
                }
                else {
                    return [2 /*return*/, api_shared_1.findMany(api_shared_1.boat, requestBody.conditions, undefined, undefined, undefined, request.res.locals.userData)];
                }
                return [2 /*return*/];
            });
        });
    };
    boatController.prototype.Getboat = function (request, boatId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.findOne(api_shared_1.boat, false, boatId)];
            });
        });
    };
    boatController.prototype.Createboat = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.createDoc(api_shared_1.boat, requestBody, request.res.locals.userData)];
            });
        });
    };
    boatController.prototype.Updateboat = function (boatId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.updateDoc(api_shared_1.boat, boatId, [tslib_1.__assign({}, requestBody)], request.res.locals.userData)];
            });
        });
    };
    boatController.prototype.deleteboat = function (boatId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, api_shared_1.deletDoc(api_shared_1.boat, boatId, request.res.locals.userData)];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find/all"),
        tsoa_1.Tags("boat"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Header("page")),
        tslib_1.__param(2, tsoa_1.Header("count"))
    ], boatController.prototype, "AdminFindboat", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["admin"]),
        tsoa_1.Post("find"),
        tsoa_1.Tags("boat"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], boatController.prototype, "Findboats", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Get("{boatId}"),
        tsoa_1.Tags("boat"),
        tslib_1.__param(0, tsoa_1.Request())
    ], boatController.prototype, "Getboat", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("boat"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], boatController.prototype, "Createboat", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Put("{boatId}"),
        tsoa_1.Tags("boat"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], boatController.prototype, "Updateboat", null);
    tslib_1.__decorate([
        tsoa_1.Security("jwt", ["owner"]),
        tsoa_1.Delete("{boatId}"),
        tsoa_1.Tags("boat"),
        tslib_1.__param(1, tsoa_1.Request())
    ], boatController.prototype, "deleteboat", null);
    boatController = tslib_1.__decorate([
        tsoa_1.Route("boat")
    ], boatController);
    return boatController;
}());
exports.boatController = boatController;
//# sourceMappingURL=boat-controller.js.map