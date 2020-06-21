declare const configs: {
    defaultPage: number;
    defaultPageSize: number;
    adminSessionDurationSeconds: number;
    userSessionDurationSeconds: number;
    reactiveImageFolder: string;
    jwtKey: string;
    s3Region: string;
    s3Buckets: {
        publicUploads: string;
        privateUploads: string;
        publicTemporary: string;
    };
    terpCompLimit: number;
    canabsCompLimit: number;
    productCategories: string[];
    loyalty: {
        defaultMessageCategories: {
            title: string;
            image: string;
            text: string;
            order: number;
        }[];
        deprecatedDefaultMessageCategories: {
            title: string;
            image: string;
            text: string;
            order: number;
        }[];
        maxMessageCategoryCount: number;
        confirmationExpirationSeconds: number;
        minimumPointOfferLife: number;
        costPerMessage: number;
        pendingMessageReloadFrequency: number;
    };
    apiAccess: {
        tokenExpirationMs: number;
        tokenExpirationhrs: string;
        jwtSecret: string;
    };
    googleAuth: {
        clientID: string;
        clientSecret: string;
        callbackURL: string;
    };
    breakSizes: {
        showcase: string[];
        primary: string[];
        secondary: string[];
    };
    baseUrl: string;
};
export default configs;
