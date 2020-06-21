import { Boat, BoatCreate } from "@helium/api-shared";
import * as express from "express";
export declare class boatController {
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
    AdminFindboat(request: express.Request, page?: number, count?: number): Promise<Boat[]>;
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
    Findboats(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<Boat[]>;
    Getboat(request: express.Request, boatId: string): Promise<Boat>;
    Createboat(request: express.Request, requestBody: BoatCreate): Promise<Boat>;
    Updateboat(boatId: string, requestBody: BoatCreate, request: express.Request): Promise<Boat>;
    deleteboat(boatId: string, request: express.Request): Promise<boolean>;
}
