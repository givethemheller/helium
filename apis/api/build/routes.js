"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
var tslib_1 = require("tslib");
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var tsoa_1 = require("tsoa");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var boat_controller_1 = require("./generated-controllers/boat-controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var part_controller_1 = require("./generated-controllers/part-controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var service_controller_1 = require("./generated-controllers/service-controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var system_controller_1 = require("./generated-controllers/system-controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var tool_controller_1 = require("./generated-controllers/tool-controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var user_controller_1 = require("./generated-controllers/user-controller");
var authentication_1 = require("./authentication");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var models = {
    "System": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true }, "referencedParts": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "description": { "dataType": "string", "required": true }, "summary": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Part": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true }, "system": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "name": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Boat": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true }, "hardware": { "dataType": "array", "array": { "dataType": "nestedObjectLiteral", "nestedProperties": { "parts": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Part" } }, "systems": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "System" } } } } }, "dimensionData": { "dataType": "nestedObjectLiteral", "nestedProperties": { "LP": { "dataType": "double", "required": true }, "E": { "dataType": "double", "required": true }, "P": { "dataType": "double", "required": true }, "J2": { "dataType": "double", "required": true }, "J": { "dataType": "double", "required": true }, "I2": { "dataType": "double", "required": true }, "I": { "dataType": "double", "required": true }, "BWL": { "dataType": "double", "required": true }, "BMX": { "dataType": "double", "required": true }, "DWL": { "dataType": "double", "required": true }, "LWL": { "dataType": "double", "required": true }, "LOA": { "dataType": "double", "required": true } } }, "model": { "dataType": "string", "required": true }, "brand": { "dataType": "string", "required": true }, "owner": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Boat.Exclude_keyofBoat._id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "owner": { "dataType": "string", "required": true }, "brand": { "dataType": "string", "required": true }, "model": { "dataType": "string", "required": true }, "dimensionData": { "dataType": "nestedObjectLiteral", "nestedProperties": { "LP": { "dataType": "double", "required": true }, "E": { "dataType": "double", "required": true }, "P": { "dataType": "double", "required": true }, "J2": { "dataType": "double", "required": true }, "J": { "dataType": "double", "required": true }, "I2": { "dataType": "double", "required": true }, "I": { "dataType": "double", "required": true }, "BWL": { "dataType": "double", "required": true }, "BMX": { "dataType": "double", "required": true }, "DWL": { "dataType": "double", "required": true }, "LWL": { "dataType": "double", "required": true }, "LOA": { "dataType": "double", "required": true } } }, "hardware": { "dataType": "array", "array": { "dataType": "nestedObjectLiteral", "nestedProperties": { "parts": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Part" } }, "systems": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "System" } } } } } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OmitOverride_Boat._id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_Boat.Exclude_keyofBoat._id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BoatCreate": {
        "dataType": "refAlias",
        "type": { "ref": "OmitOverride_Boat._id_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Part.Exclude_keyofPart._id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "system": { "dataType": "array", "array": { "dataType": "string" }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OmitOverride_Part._id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_Part.Exclude_keyofPart._id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PartCreate": {
        "dataType": "refAlias",
        "type": { "ref": "OmitOverride_Part._id_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Service": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true }, "newParts": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "partsServiced": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "systems": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "steps": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "description": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Service.Exclude_keyofService._id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "description": { "dataType": "string", "required": true }, "steps": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "systems": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "partsServiced": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "newParts": { "dataType": "array", "array": { "dataType": "string" }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OmitOverride_Service._id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_Service.Exclude_keyofService._id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ServiceCreate": {
        "dataType": "refAlias",
        "type": { "ref": "OmitOverride_Service._id_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_System.Exclude_keyofSystem._id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "description": { "dataType": "string", "required": true }, "summary": { "dataType": "string", "required": true }, "referencedParts": { "dataType": "array", "array": { "dataType": "string" }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OmitOverride_System._id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_System.Exclude_keyofSystem._id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SystemCreate": {
        "dataType": "refAlias",
        "type": { "ref": "OmitOverride_System._id_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Tool": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true }, "description": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Tool.Exclude_keyofTool._id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "description": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OmitOverride_Tool._id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_Tool.Exclude_keyofTool._id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ToolCreate": {
        "dataType": "refAlias",
        "type": { "ref": "OmitOverride_Tool._id_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GROUPS": {
        "dataType": "refEnum",
        "enums": ["admin", "user", "owner", "unathenticated"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true }, "phoneValidationCode": { "dataType": "string" }, "phone": { "dataType": "double" }, "password": { "dataType": "string" }, "email": { "dataType": "string" }, "currentToken": { "dataType": "string" }, "googleProvider": { "dataType": "nestedObjectLiteral", "nestedProperties": { "token": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } }, "sessionStartDate": { "dataType": "datetime" }, "passwordResetExpires": { "dataType": "datetime" }, "passwordResetHash": { "dataType": "string" }, "userPermissions": { "dataType": "array", "array": { "dataType": "refEnum", "enums": ["admin", "user", "owner", "unathenticated"] }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_User.email-or-phone-or-password_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "email": { "dataType": "string" }, "phone": { "dataType": "double" }, "password": { "dataType": "string" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserCreate": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_User.email-or-phone-or-password_", "validators": {} },
    },
};
var validationService = new tsoa_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/v1/boat/find/all', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            page: { "default": 1, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "page" } } },
            count: { "default": 10, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "count" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new boat_controller_1.boatController();
        var promise = controller.AdminFindboat.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/boat/find', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "conditions": { "dataType": "any", "required": true } } },
            page: { "default": 0, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
            count: { "default": 20, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new boat_controller_1.boatController();
        var promise = controller.Findboats.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/v1/boat/:boatId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            boatId: { "in": "path", "name": "boatId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new boat_controller_1.boatController();
        var promise = controller.Getboat.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/boat', function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "BoatCreate" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new boat_controller_1.boatController();
        var promise = controller.Createboat.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/v1/boat/:boatId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            boatId: { "in": "path", "name": "boatId", "required": true, "dataType": "string" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "BoatCreate" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new boat_controller_1.boatController();
        var promise = controller.Updateboat.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/v1/boat/:boatId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            boatId: { "in": "path", "name": "boatId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new boat_controller_1.boatController();
        var promise = controller.deleteboat.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/part/find/all', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            page: { "default": 1, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "page" } } },
            count: { "default": 10, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "count" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new part_controller_1.partController();
        var promise = controller.AdminFindpart.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/part/find', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "conditions": { "dataType": "any", "required": true } } },
            page: { "default": 0, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
            count: { "default": 20, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new part_controller_1.partController();
        var promise = controller.Findparts.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/v1/part/:partId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            partId: { "in": "path", "name": "partId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new part_controller_1.partController();
        var promise = controller.Getpart.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/part', function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "PartCreate" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new part_controller_1.partController();
        var promise = controller.Createpart.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/v1/part/:partId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            partId: { "in": "path", "name": "partId", "required": true, "dataType": "string" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "PartCreate" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new part_controller_1.partController();
        var promise = controller.Updatepart.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/v1/part/:partId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            partId: { "in": "path", "name": "partId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new part_controller_1.partController();
        var promise = controller.deletepart.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/service/find/all', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            page: { "default": 1, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "page" } } },
            count: { "default": 10, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "count" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new service_controller_1.serviceController();
        var promise = controller.AdminFindservice.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/service/find', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "conditions": { "dataType": "any", "required": true } } },
            page: { "default": 0, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
            count: { "default": 20, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new service_controller_1.serviceController();
        var promise = controller.Findservices.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/v1/service/:serviceId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            serviceId: { "in": "path", "name": "serviceId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new service_controller_1.serviceController();
        var promise = controller.Getservice.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/service', function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "ServiceCreate" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new service_controller_1.serviceController();
        var promise = controller.Createservice.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/v1/service/:serviceId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            serviceId: { "in": "path", "name": "serviceId", "required": true, "dataType": "string" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "ServiceCreate" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new service_controller_1.serviceController();
        var promise = controller.Updateservice.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/v1/service/:serviceId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            serviceId: { "in": "path", "name": "serviceId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new service_controller_1.serviceController();
        var promise = controller.deleteservice.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/system/find/all', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            page: { "default": 1, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "page" } } },
            count: { "default": 10, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "count" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new system_controller_1.systemController();
        var promise = controller.AdminFindsystem.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/system/find', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "conditions": { "dataType": "any", "required": true } } },
            page: { "default": 0, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
            count: { "default": 20, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new system_controller_1.systemController();
        var promise = controller.Findsystems.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/v1/system/:systemId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            systemId: { "in": "path", "name": "systemId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new system_controller_1.systemController();
        var promise = controller.Getsystem.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/system', function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "SystemCreate" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new system_controller_1.systemController();
        var promise = controller.Createsystem.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/v1/system/:systemId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            systemId: { "in": "path", "name": "systemId", "required": true, "dataType": "string" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "SystemCreate" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new system_controller_1.systemController();
        var promise = controller.Updatesystem.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/v1/system/:systemId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            systemId: { "in": "path", "name": "systemId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new system_controller_1.systemController();
        var promise = controller.deletesystem.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/tool/find/all', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            page: { "default": 1, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "page" } } },
            count: { "default": 10, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "count" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new tool_controller_1.toolController();
        var promise = controller.AdminFindtool.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/tool/find', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "conditions": { "dataType": "any", "required": true } } },
            page: { "default": 0, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
            count: { "default": 20, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new tool_controller_1.toolController();
        var promise = controller.Findtools.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/v1/tool/:toolId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            toolId: { "in": "path", "name": "toolId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new tool_controller_1.toolController();
        var promise = controller.Gettool.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/tool', function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "ToolCreate" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new tool_controller_1.toolController();
        var promise = controller.Createtool.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/v1/tool/:toolId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            toolId: { "in": "path", "name": "toolId", "required": true, "dataType": "string" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "ToolCreate" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new tool_controller_1.toolController();
        var promise = controller.Updatetool.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/v1/tool/:toolId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            toolId: { "in": "path", "name": "toolId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new tool_controller_1.toolController();
        var promise = controller.deletetool.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/user/find/all', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            page: { "default": 1, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "page" } } },
            count: { "default": 10, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "count" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new user_controller_1.userController();
        var promise = controller.AdminFinduser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/user/find', authenticateMiddleware([{ "jwt": ["admin"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "conditions": { "dataType": "any", "required": true } } },
            page: { "default": 0, "in": "header", "name": "page", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
            count: { "default": 20, "in": "header", "name": "count", "dataType": "integer", "validators": { "isInt": { "errorMsg": "non decimal" } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new user_controller_1.userController();
        var promise = controller.Findusers.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/v1/user/:userId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new user_controller_1.userController();
        var promise = controller.Getuser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/user', function (request, response, next) {
        var args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UserCreate" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new user_controller_1.userController();
        var promise = controller.Createuser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/v1/user/:userId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UserCreate" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new user_controller_1.userController();
        var promise = controller.Updateuser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/v1/user/:userId', authenticateMiddleware([{ "jwt": ["owner"] }]), function (request, response, next) {
        var args = {
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        var validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        var controller = new user_controller_1.userController();
        var promise = controller.deleteuser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security) {
        if (security === void 0) { security = []; }
        return function (request, _response, next) {
            var e_1, _a;
            var responded = 0;
            var success = false;
            var succeed = function (user) {
                if (!success) {
                    success = true;
                    responded++;
                    request['user'] = user;
                    next();
                }
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var fail = function (error) {
                responded++;
                if (responded == security.length && !success) {
                    error.status = error.status || 401;
                    next(error);
                }
            };
            try {
                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                for (var security_1 = tslib_1.__values(security), security_1_1 = security_1.next(); !security_1_1.done; security_1_1 = security_1.next()) {
                    var secMethod = security_1_1.value;
                    if (Object.keys(secMethod).length > 1) {
                        var promises = [];
                        for (var name_1 in secMethod) {
                            promises.push(authentication_1.expressAuthentication(request, name_1, secMethod[name_1]));
                        }
                        Promise.all(promises)
                            .then(function (users) { succeed(users[0]); })
                            .catch(fail);
                    }
                    else {
                        for (var name_2 in secMethod) {
                            authentication_1.expressAuthentication(request, name_2, secMethod[name_2])
                                .then(succeed)
                                .catch(fail);
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (security_1_1 && !security_1_1.done && (_a = security_1.return)) _a.call(security_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, next) {
        return Promise.resolve(promise)
            .then(function (data) {
            var statusCode;
            var headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus();
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch(function (error) { return next(error); });
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers) {
        if (headers === void 0) { headers = {}; }
        Object.keys(headers).forEach(function (name) {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        }
        else if (data || data === false) { // === false allows boolean result
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        var fieldErrors = {};
        var values = Object.keys(args).map(function (key) {
            var name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "ignore" });
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new tsoa_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map