"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tool = void 0;
var mongoose_1 = require("mongoose");
// tslint:disable-next-line: no-implicit-dependencies
// tslint:disable-next-line: no-var-requires
var mongoose_id_validator_1 = __importDefault(require("mongoose-id-validator"));
var mongoose_2 = require("@casl/mongoose");
var Tool = new mongoose_1.Schema({
    length: {
        type: Number
    }
}, { timestamps: { createdAt: "createdAt" } });
Tool.plugin(mongoose_id_validator_1.default);
Tool.plugin(mongoose_2.accessibleRecordsPlugin);
exports.tool = mongoose_1.model("Tool", Tool);
//# sourceMappingURL=Tool.js.map