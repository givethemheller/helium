import app from "./app";
import http from "http";
import env from "./env/config";
import connect from "./mongoConnect"
connect().then(() => {
  const server = http.createServer(app);
  server.listen(env.hostPort);
}, () => {
  throw new Error("Failed to connect to mongo db");
})

