"use strict";
import { Document, model, Schema } from "mongoose";
// tslint:disable-next-line: no-implicit-dependencies
// tslint:disable-next-line: no-var-requires
import MongooseIdValidator from "mongoose-id-validator";
import { OmitOverride } from "../baseInterfaces";
import { accessibleRecordsPlugin } from "@casl/mongoose";
export enum GROUPS {
  admin = "admin",
  user = "user",
  owner = "owner",
  unathenticated = "unathenticated"
}
export type User = {
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
}


export type UserCreate = Pick<User, "email" | "phone" | "password">;
export type UserUpdate = UserCreate;
export type UserDelete = Pick<User, "_id">;

export type UserDocument = Document & OmitOverride<User, "_id"> & {
  _id: any;
}

const User: Schema = new Schema<User>(
  {
    userName: String,
    age: Number,
    email: {
      type: String,
      trim: true,
      index: true,
      unique: true,
      // eslint-disable-next-line no-useless-escape
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      required: function (this: UserDocument) {
        return !this.phone
      }
    },
    password: {
      type: String,
      required: function (this: UserDocument) {
        return !(this.phone && !this.email)
      }
    },
    passwordResetHash: String,
    passwordResetExpires: Date,
    phone: {
      type: Number,
      index: true,
      unique: true,
      min: 1111111111,
      // only allows us phone numbers
      max: 19999999999,
      required: function (this: UserDocument) {
        return !this.email
      }
    },
    phoneValdationCode: String,
    sessionStartDate: { type: Date, default: Date.now() },
    googleProvider: {
      id: String,
      token: String
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);
User.plugin(MongooseIdValidator);
User.plugin(accessibleRecordsPlugin);
export const user = model<UserDocument>(
  "User",
  User
);
