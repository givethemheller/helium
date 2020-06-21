import { Part, PartCreate } from "@helium/api-shared";
import * as express from "express";
export declare class partController {
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
    AdminFindpart(request: express.Request, page?: number, count?: number): Promise<Part[]>;
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
    Findparts(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<Part[]>;
    Getpart(request: express.Request, partId: string): Promise<Part>;
    Createpart(request: express.Request, requestBody: PartCreate): Promise<Part>;
    Updatepart(partId: string, requestBody: PartCreate, request: express.Request): Promise<Part>;
    deletepart(partId: string, request: express.Request): Promise<boolean>;
}
