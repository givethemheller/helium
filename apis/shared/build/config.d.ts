declare const configs: {
    mongoPort: number;
    dbName: string;
    key: string;
    host: string;
    hostPort: string;
    jwtKey: string;
    tokenExp: string;
    tokenApiExp: string;
    remoteKey: string;
    adminSessionDurationSeconds: number;
    userSessionDurationSeconds: number;
    reactiveImageFolder: string;
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
    getTestDBName: () => "jesttest" | "";
    baseUrl: string;
};
export default configs;
