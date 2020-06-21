/**
 * A boat in the overall system. Describes the boat, its systems, parts and history of service.
 */
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
var Boat = new mongoose_1.Schema({
    length: {
        type: Number
    }
}, { timestamps: { createdAt: "createdAt" } });
Boat.plugin(mongoose_id_validator_1.default);
Boat.plugin(mongoose_2.accessibleRecordsPlugin);
exports.boat = mongoose_1.model("Boat", Boat);
//# sourceMappingURL=Boat.js.map