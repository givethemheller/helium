"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var express_1 = tslib_1.__importDefault(require("express"));
// // import methodOverride from "method-override";
// import morganBody from 'morgan-body';
var cors_1 = tslib_1.__importDefault(require("cors"));
//import sitemap from "./utils/sitemap";
var morgan = require("morgan");
var routes_1 = require("./routes");
// CORS Configurations
var origins = [
    "http://localhost:",
    "https://127.0.0.1:",
    "https://localhost:",
    "https://[yourwebsite].com",
];
var corsOption = {
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }
        if (!origins.some(function (element) {
            return origin.search(element) > -1;
        })) {
            var msg = "The CORS policy for this site does not " +
                "allow access from the specified Origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["x-auth-token"]
};
// configure the app with baseline
var app = express_1.default()
    .use(morgan("dev"))
    .use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }))
    .use(body_parser_1.default.json({ limit: "50mb" }))
    // .use(methodOverride())
    .use(cors_1.default(corsOption));
// morganBody(app);
routes_1.RegisterRoutes(app);
app.use(function (err, _req, res, next) {
    var status = err.status || 500;
    var body = {
        fields: err.fields || null,
        message: err.message || "An error occurred during the request.",
        name: err.name,
        status: status
    };
    res.status(status).json(body);
    next();
});
exports.default = app;
//# sourceMappingURL=app.js.map