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
var Service = new mongoose_1.Schema({
    length: {
        type: Number
    }
}, { timestamps: { createdAt: "createdAt" } });
Service.plugin(mongoose_id_validator_1.default);
Service.plugin(mongoose_2.accessibleRecordsPlugin);
exports.service = mongoose_1.model("Service", Service);
//# sourceMappingURL=Service.js.map