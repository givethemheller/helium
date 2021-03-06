"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.part = void 0;
var mongoose_1 = require("mongoose");
// tslint:disable-next-line: no-implicit-dependencies
// tslint:disable-next-line: no-var-requires
var mongoose_id_validator_1 = __importDefault(require("mongoose-id-validator"));
var mongoose_2 = require("@casl/mongoose");
var Part = new mongoose_1.Schema({
    length: {
        type: Number
    }
}, { timestamps: { createdAt: "createdAt" } });
Part.plugin(mongoose_id_validator_1.default);
Part.plugin(mongoose_2.accessibleRecordsPlugin);
exports.part = mongoose_1.model("Part", Part);
//# sourceMappingURL=Part.js.map