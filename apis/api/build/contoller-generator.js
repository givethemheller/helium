"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var api_shared_1 = require("@helium/api-shared");
var mustache_1 = tslib_1.__importDefault(require("mustache"));
var controller_template_1 = require("./controller-template");
var fs_1 = tslib_1.__importDefault(require("fs"));
var fsEx = require("fs-extra");
var allModels = api_shared_1.registeredModels;
fsEx.emptyDir("./src/generated-controllers/", function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }
    console.log("models cleared!");
    allModels.map(function (templateData) {
        var template = controller_template_1.modelControllerTemplate;
        var completedDoc = mustache_1.default.render(template, templateData);
        console.log("created " + templateData);
        fs_1.default.writeFile("./src/generated-controllers/" + templateData.objModel + "-controller.ts", completedDoc, function (err) {
            if (err) {
                console.error(err);
                throw new Error("see logged error");
            }
        });
    });
});
//# sourceMappingURL=contoller-generator.js.map