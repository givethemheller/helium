import { User, Entity } from "@cannabinder/cbd-shared";
import { Configurations } from "@cannabinder/cbd-shared";
export declare function validateToken(token: string, jwtKey: string): string | object;
export declare function getUserFromToken(token: string, jwtKey: string): Promise<User>;
export declare function generateNewToken(token: string, config: Pick<Configurations, "adminSessionDurationSeconds" | "jwtKey" | "userSessionDurationSeconds">): Promise<string>;
export declare function checkTokenService(token: string, config: Pick<Configurations, "jwtKey">): Promise<boolean>;
export declare function validateLoyaltyAccess(entity: Entity): boolean;
export declare function userSignUp(emailApiKey: string, userData: User & {
    accountType: "dispensary" | "producer";
}): Promise<User>;
