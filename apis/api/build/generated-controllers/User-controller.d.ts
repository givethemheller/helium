import { User, UserCreate } from "@helium/api-shared";
import * as express from "express";
export declare class userController {
    /**
     *
     * @param {object} request
     * @param {object} requestBody
     * @param {integer} page the page that is returned
     * @param {integer} count the number of records in the page
     *
     * @isInt page
     * @isInt count
     */
    AdminFinduser(request: express.Request, page?: number, count?: number): Promise<User[]>;
    /**
     *
     * @param {object} request
     * @param {object} requestBody
     * @param {number} page page needs description
     * @param {number} count count needs description
     *
     * @isInt page non decimal
     * @isInt count non decimal
     */
    Findusers(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<User[]>;
    Getuser(request: express.Request, userId: string): Promise<User>;
    Createuser(request: express.Request, requestBody: UserCreate): Promise<User>;
    Updateuser(userId: string, requestBody: UserCreate, request: express.Request): Promise<User>;
    deleteuser(userId: string, request: express.Request): Promise<boolean>;
}
