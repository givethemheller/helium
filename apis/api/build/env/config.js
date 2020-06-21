"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Some of these configs may not actually be in use
 */
var mongoPort = 27017;
var dbName = "helium";
var key = "thiskeyislighterthanairandmadetofloat";
var host = "localhost";
var hostPort = "3002";
var jwtKey = "thisIsAlongKeyWithNothingToHide";
var tokenExp = "1h";
var tokenApiExp = "24h";
var configs = {
    tokenApiExp: tokenApiExp,
    mongoPort: mongoPort,
    dbName: dbName,
    key: key,
    host: host,
    hostPort: hostPort,
    jwtKey: jwtKey,
    tokenExp: tokenExp,
};
exports.default = configs;
//# sourceMappingURL=config.js.map