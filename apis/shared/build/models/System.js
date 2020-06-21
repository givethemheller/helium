"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// tslint:disable-next-line: no-implicit-dependencies
// tslint:disable-next-line: no-var-requires
var mongoose_id_validator_1 = __importDefault(require("mongoose-id-validator"));
var mongoose_2 = require("@casl/mongoose");
var System = new mongoose_1.Schema({
    length: {
        type: Number
    }
}, { timestamps: { createdAt: "createdAt" } });
System.plugin(mongoose_id_validator_1.default);
System.plugin(mongoose_2.accessibleRecordsPlugin);
exports.system = mongoose_1.model("System", System);
//# sourceMappingURL=System.js.map