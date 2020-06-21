// console.log("node env in config "+process.env.NODE_ENV ,

const configs = {
  mongoPort: 27017,
  dbName: "cannabinder",
  key: "thisisalongkeywithnothingtotalkabout",
  host: "localhost",
  hostPort: "3002",
  jwtKey: "thisIsAlongKeyWithNothingToHide",
  tokenExp: "1h",
  tokenApiExp: "24h",
  remoteKey: "YouSimplyH%dToH&veOneAndItIsD1ssapointing",
  adminSessionDurationSeconds: 60 * 60 * 24 * 1,
  userSessionDurationSeconds: 60 * 60 * 24 * 30,
  reactiveImageFolder: "publicImages",

  googleAuth: {
    clientID:
      "385014844088-gln7r0bno47v800pt2pbm94s4ldqmjdh.apps.googleusercontent.com",
    clientSecret: "Zhf18AaxoaUTu65gSVE8xuxN",
    callbackURL: "https://localhost:3002/auth/google/callback"
  },
  breakSizes: {
    showcase: ["1200", "800", "600", "400"],
    primary: ["1200", "800", "600", "400"],
    secondary: ["1200", "800", "600", "400"]
  },
  getTestDBName: function () {
    return process.env.NODE_ENV === "test" ? "jesttest" : "";
  },
  baseUrl: "https://localhost:3000"
};

if (process.env.NODE_ENV === "production") {
  configs.googleAuth = {
    clientID:
      "385014844088-gln7r0bno47v800pt2pbm94s4ldqmjdh.apps.googleusercontent.com",
    clientSecret: "Zhf18AaxoaUTu65gSVE8xuxN",
    callbackURL: "https://www.cannabinder.com/auth/google/callback"
  };
}

switch (process.env.DEV_STATE) {
  case "staging":
    configs.baseUrl = "https://staging.cannabinder.com";
    break;
  case "production":
    configs.baseUrl = "https://cannabinder.com";
    break;
  default:
    configs.baseUrl = "https://localhost:3000";
    break;
}

export default configs;
module.exports = configs;
