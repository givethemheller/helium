import bodyParser from "body-parser";
import express from "express";

// // import methodOverride from "method-override";
// import morganBody from 'morgan-body';
import cors from "cors";
//import sitemap from "./utils/sitemap";
const morgan = require("morgan");
import { RegisterRoutes } from "./routes";
// CORS Configurations
const origins = [
  "http://localhost:",
  "https://127.0.0.1:",
  "https://localhost:",
  "https://[yourwebsite].com",
];
const corsOption = {
  origin: (
    origin: string,
    callback: (error: Error, passing: boolean) => void
  ) => {
    if (!origin) {
      return callback(null, true);
    }
    if (
      !origins.some(element => {
        return origin.search(element) > -1;
      })
    ) {
      const msg =
        "The CORS policy for this site does not " +
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
const app = express()
  .use(morgan("dev"))
  .use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
  .use(bodyParser.json({ limit: "50mb" }))
  // .use(methodOverride())
  .use(cors(corsOption))

// morganBody(app);
RegisterRoutes(app);

interface CustomError {
  status?: number;
  fields?: string[];
  message?: string;
  name?: string;
}

app.use(
  (
    err: CustomError,
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const status = err.status || 500;
    const body = {
      fields: err.fields || null,
      message: err.message || "An error occurred during the request.",
      name: err.name,
      status
    };
    res.status(status).json(body);
    next();
  }
);

export default app