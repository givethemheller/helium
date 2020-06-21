import { Document } from "mongoose";
import { OmitOverride } from "../baseInterfaces";
export declare enum GROUPS {
    admin = "admin",
    user = "user",
    owner = "owner",
    unathenticated = "unathenticated"
}
export declare type User = {
    /**
     * Permission level of the user
     */
    userPermissions: GROUPS[];
    /**
     * password reset hash that the user can use to reset their password
     */
    passwordResetHash?: string;
    /**
     * date at which the password hash is no longer valid for resetting
     */
    passwordResetExpires?: Date;
    /**
     * The date and time that the users session began
     */
    sessionStartDate?: Date;
    /**
     * data from Google for google SSO
     */
    googleProvider?: {
        id: string;
        token: string;
    };
    /**
     * Current token for the user
     */
    currentToken?: string;
    /**
     * Email for the user
     */
    email?: string;
    /**
     * The users password, encrypted
     */
    password?: string;
    /**
     * the phone number of the user that can be used for phone based
     * authentication
     */
    phone?: number;
    /**
     * Code texted to the user to validate their phone number
     */
    phoneValidationCode?: string;
    /**
     * The users mongodb id
     */
    _id: string;
};
export declare type UserCreate = Pick<User, "email" | "phone" | "password">;
export declare type UserUpdate = UserCreate;
export declare type UserDelete = Pick<User, "_id">;
export declare type UserDocument = Document & OmitOverride<User, "_id"> & {
    _id: any;
};
export declare const user: import("mongoose").Model<UserDocument, {}>;
