"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configs = {
    defaultPage: 0,
    defaultPageSize: 20,
    adminSessionDurationSeconds: 60 * 60 * 24 * 1,
    userSessionDurationSeconds: 60 * 60 * 24 * 30,
    reactiveImageFolder: "publicImages",
    jwtKey: "thisIsAlongKeyWithNothingToHide",
    s3Region: "eu-west-2",
    s3Buckets: {
        publicUploads: "cannabinder-public-uploads",
        privateUploads: "cannabinder-private",
        publicTemporary: "cannabinder-public-temporary"
    },
    terpCompLimit: 0.25,
    canabsCompLimit: 1,
    productCategories: ["Extract", "Flower", "Edible", "Topical"],
    loyalty: {
        defaultMessageCategories: [
            {
                title: "Education",
                image: "/assets/images/loyalty/categories/loyalty-category-education.png",
                text: "Learn more about Cannabis!",
                order: 1
            },
            {
                title: "Events & Deals",
                image: "/assets/images/loyalty/categories/loyalty-category-marketing.png",
                text: "Get alerts on promotions and events.",
                order: 2
            },
            {
                title: "Fresh Drops",
                image: "/assets/images/loyalty/categories/loyalty-category-topicals.png",
                text: "Get alerts on fresh drops for your favorite products.",
                order: 3
            },
            {
                title: "Flower",
                image: "/assets/images/loyalty/categories/loyalty-category-flower.png",
                text: "Get alerts on our flower deals.",
                order: 4
            },
            {
                title: "Concentrates",
                image: "/assets/images/loyalty/categories/loyalty-category-concentrates.png",
                text: "Get alerts on our concetrate deals.",
                order: 5
            },
            {
                title: "Edibles",
                image: "/assets/images/loyalty/categories/loyalty-category-edibles.png",
                text: "Get alerts on our Edible deals.",
                order: 6
            }
        ],
        deprecatedDefaultMessageCategories: [
            {
                title: "Education",
                image: "loyalty-category-education.png",
                text: "Learn more about Cannabis!",
                order: 1
            },
            {
                title: "Events & Deals",
                image: "loyalty-category-marketing.png",
                text: "Get alerts on promotions and events.",
                order: 2
            },
            {
                title: "Fresh Drops",
                image: "loyalty-category-topicals.png",
                text: "Get alerts on fresh drops for your favorite products.",
                order: 3
            },
            {
                title: "Flower",
                image: "loyalty-category-flower.png",
                text: "Get alerts on flower deals.",
                order: 4
            },
            {
                title: "Concentrates",
                image: "loyalty-category-concentrates.png",
                text: "Get alerts on concetrate deals.",
                order: 5
            },
            {
                title: "Edibles",
                image: "loyalty-category-edibles.png",
                text: "Get alerts on Edible deals.",
                order: 6
            }
        ],
        maxMessageCategoryCount: 6,
        confirmationExpirationSeconds: 600,
        minimumPointOfferLife: 24 * 60 * 60 * 1000,
        costPerMessage: 0.03,
        pendingMessageReloadFrequency: 3 * 60 * 1000
    },
    apiAccess: {
        tokenExpirationMs: 24 * 60 * 60 * 1000,
        tokenExpirationhrs: "24h",
        jwtSecret: "mke@49dkfd@49Dkdaaddderu"
    },
    googleAuth: {
        clientID: "385014844088-gln7r0bno47v800pt2pbm94s4ldqmjdh.apps.googleusercontent.com",
        clientSecret: "Zhf18AaxoaUTu65gSVE8xuxN",
        callbackURL: "https://localhost:3002/auth/google/callback"
    },
    breakSizes: {
        showcase: ["1200", "800", "600", "400"],
        primary: ["1200", "800", "600", "400"],
        secondary: ["1200", "800", "600", "400"]
    },
    baseUrl: "https://localhost:3000"
};
if (process.env.NODE_ENV === "production") {
    configs.googleAuth = {
        clientID: "385014844088-gln7r0bno47v800pt2pbm94s4ldqmjdh.apps.googleusercontent.com",
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
exports.default = configs;
module.exports = configs;
//# sourceMappingURL=config.js.map