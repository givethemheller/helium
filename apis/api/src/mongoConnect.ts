import mongoose from "mongoose";
import env from "./env/config";
import { accessibleRecordsPlugin, permittedFieldsPlugin } from "@casl/mongoose";
const TEST_DB_NAME = "testDb";

export default function connect() {

  return mongoose.connect(selectDb()).then(
    () => {
      console.log("mongo succesfully connected");
      mongoose.plugin(accessibleRecordsPlugin);
      mongoose.plugin(permittedFieldsPlugin);
      ("authorization system initialized");
    },
    rejected => {
      console.error("Database Rejected: ", rejected);
    }
  );
}

function selectDb(): string {
  let mongoUri: string;

  const options = false;
  if (process.env.NODE_ENV === "test") {
    mongoUri = `mongodb://${env.host}:${env.mongoPort}/${TEST_DB_NAME}?retryWrites=false`;
  } else if (process.env.NODE_ENV === "debug") {
    mongoUri = `mongodb://${env.host}:${env.mongoPort}/${env.dbName}?retryWrites=false`;
  } else if (process.env.NODE_ENV === "production") {
    const leader =
      process.env.MONGODB_URI.search("replicaSet") === -1 ? `?` : "&";
    mongoUri = process.env.MONGODB_URI + leader + `retryWrites=false`;
  } else {
    mongoUri = `mongodb://${env.host}:${env.mongoPort}/${env.dbName}?retryWrites=false`;
  }
  console.log(
    "connecting to mongo: " + mongoUri + ", Options: " + JSON.stringify(options)
  );
  return mongoUri
}


export async function clearTestDb() {
  const connected = await mongoose.connect(selectDb());
  if (connected.connection.db.databaseName === TEST_DB_NAME) {
    await connected.connection.db.dropDatabase()
  }
  return connected.connection.close();
}