import { System, SystemCreate } from "@helium/api-shared";
import * as express from "express";
export declare class systemController {
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
    AdminFindsystem(request: express.Request, page?: number, count?: number): Promise<System[]>;
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
    Findsystems(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<System[]>;
    Getsystem(request: express.Request, systemId: string): Promise<System>;
    Createsystem(request: express.Request, requestBody: SystemCreate): Promise<System>;
    Updatesystem(systemId: string, requestBody: SystemCreate, request: express.Request): Promise<System>;
    deletesystem(systemId: string, request: express.Request): Promise<boolean>;
}
