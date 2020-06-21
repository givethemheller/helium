import { Service, ServiceCreate } from "@helium/api-shared";
import * as express from "express";
export declare class serviceController {
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
    AdminFindservice(request: express.Request, page?: number, count?: number): Promise<Service[]>;
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
    Findservices(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<Service[]>;
    Getservice(request: express.Request, serviceId: string): Promise<Service>;
    Createservice(request: express.Request, requestBody: ServiceCreate): Promise<Service>;
    Updateservice(serviceId: string, requestBody: ServiceCreate, request: express.Request): Promise<Service>;
    deleteservice(serviceId: string, request: express.Request): Promise<boolean>;
}
