"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTestDb = void 0;
var tslib_1 = require("tslib");
var mongoose_1 = tslib_1.__importDefault(require("mongoose"));
var config_1 = tslib_1.__importDefault(require("./env/config"));
var mongoose_2 = require("@casl/mongoose");
var TEST_DB_NAME = "testDb";
function connect() {
    return mongoose_1.default.connect(selectDb()).then(function () {
        console.log("mongo succesfully connected");
        mongoose_1.default.plugin(mongoose_2.accessibleRecordsPlugin);
        mongoose_1.default.plugin(mongoose_2.permittedFieldsPlugin);
        ("authorization system initialized");
    }, function (rejected) {
        console.error("Database Rejected: ", rejected);
    });
}
exports.default = connect;
function selectDb() {
    var mongoUri;
    var options = false;
    if (process.env.NODE_ENV === "test") {
        mongoUri = "mongodb://" + config_1.default.host + ":" + config_1.default.mongoPort + "/" + TEST_DB_NAME + "?retryWrites=false";
    }
    else if (process.env.NODE_ENV === "debug") {
        mongoUri = "mongodb://" + config_1.default.host + ":" + config_1.default.mongoPort + "/" + config_1.default.dbName + "?retryWrites=false";
    }
    else if (process.env.NODE_ENV === "production") {
        var leader = process.env.MONGODB_URI.search("replicaSet") === -1 ? "?" : "&";
        mongoUri = process.env.MONGODB_URI + leader + "retryWrites=false";
    }
    else {
        mongoUri = "mongodb://" + config_1.default.host + ":" + config_1.default.mongoPort + "/" + config_1.default.dbName + "?retryWrites=false";
    }
    console.log("connecting to mongo: " + mongoUri + ", Options: " + JSON.stringify(options));
    return mongoUri;
}
function clearTestDb() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var connected;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose_1.default.connect(selectDb())];
                case 1:
                    connected = _a.sent();
                    if (!(connected.connection.db.databaseName === TEST_DB_NAME)) return [3 /*break*/, 3];
                    return [4 /*yield*/, connected.connection.db.dropDatabase()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, connected.connection.close()];
            }
        });
    });
}
exports.clearTestDb = clearTestDb;
//# sourceMappingURL=mongoConnect.js.map