"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var ConsumerController = /** @class */ (function () {
    function ConsumerController() {
    }
    ConsumerController.prototype.getBinder = function (aliasedPathId // @Header("x-access-token") authorization: string
    ) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve(("a user binder" + aliasedPathId));
                    })];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Security("jwt"),
        tsoa_1.Get("binder/{userId}"),
        tsoa_1.Tags("consumer"),
        tslib_1.__param(0, tsoa_1.Path("userId"))
    ], ConsumerController.prototype, "getBinder", null);
    ConsumerController = tslib_1.__decorate([
        tsoa_1.Route("consumer")
    ], ConsumerController);
    return ConsumerController;
}());
exports.ConsumerController = ConsumerController;
//# sourceMappingURL=consumer-controller.js.map