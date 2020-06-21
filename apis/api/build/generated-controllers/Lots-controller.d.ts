import { ProductLot, ProductLotOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class ProductLotController {
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
    AdminFindProductLot(request: express.Request, page?: number, count?: number): Promise<ProductLot[]>;
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
    FindLotss(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<ProductLot[]>;
    GetLots(request: express.Request, ProductLotId: string): Promise<ProductLot>;
    CreateLots(request: express.Request, requestBody: ProductLotOwnerCreate): Promise<ProductLot>;
    UpdateLots(ProductLotId: string, requestBody: ProductLot, request: express.Request): Promise<ProductLot>;
    deleteLots(ProductLotId: string, request: express.Request): Promise<boolean>;
}
