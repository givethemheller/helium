"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.GROUPS = void 0;
var mongoose_1 = require("mongoose");
// tslint:disable-next-line: no-implicit-dependencies
// tslint:disable-next-line: no-var-requires
var mongoose_id_validator_1 = __importDefault(require("mongoose-id-validator"));
var mongoose_2 = require("@casl/mongoose");
var GROUPS;
(function (GROUPS) {
    GROUPS["admin"] = "admin";
    GROUPS["user"] = "user";
    GROUPS["owner"] = "owner";
    GROUPS["unathenticated"] = "unathenticated";
})(GROUPS = exports.GROUPS || (exports.GROUPS = {}));
var User = new mongoose_1.Schema({
    userName: String,
    age: Number,
    email: {
        type: String,
        trim: true,
        index: true,
        unique: true,
        // eslint-disable-next-line no-useless-escape
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        required: function () {
            return !this.phone;
        }
    },
    password: {
        type: String,
        required: function () {
            return !(this.phone && !this.email);
        }
    },
    passwordResetHash: String,
    passwordResetExpires: Date,
    phone: {
        type: Number,
        index: true,
        unique: true,
        min: 1111111111,
        // only allows us phone numbers
        max: 19999999999,
        required: function () {
            return !this.email;
        }
    },
    phoneValdationCode: String,
    sessionStartDate: { type: Date, default: Date.now() },
    googleProvider: {
        id: String,
        token: String
    }
}, { timestamps: { createdAt: "createdAt" } });
User.plugin(mongoose_id_validator_1.default);
User.plugin(mongoose_2.accessibleRecordsPlugin);
exports.user = mongoose_1.model("User", User);
//# sourceMappingURL=User.js.map