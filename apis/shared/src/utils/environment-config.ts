import env from "../config";

const baseUrl = (https = true) => {
  return https === true
    ? `https://${env.host}:${env.hostPort}/`
    : `http://${env.host}:${env.hostPort}/`;
};

const getTestDBName = () => (process.env.NODE_ENV === "test" ? "jesttest" : ""); // see 'yarn test'

module.exports = {
  baseUrl,
  getTestDBName
};
