/**
 * Some of these configs may not actually be in use
 */
const mongoPort = 27017;
const dbName = "helium";
const key = "thiskeyislighterthanairandmadetofloat";
const host = "localhost";
const hostPort = "3002";
const jwtKey = "thisIsAlongKeyWithNothingToHide";
const tokenExp = "1h";
const tokenApiExp = "24h";


const configs = {
  tokenApiExp,
  mongoPort,
  dbName,
  key,
  host,
  hostPort,
  jwtKey,
  tokenExp,
};
export default configs;
