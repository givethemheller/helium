import { DispensaryInventory, DispensaryInventoryOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class DispensaryInventoryController {
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
    AdminFindDispensaryInventory(request: express.Request, page?: number, count?: number): Promise<DispensaryInventory[]>;
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
    FindRetailInventoriess(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<DispensaryInventory[]>;
    GetRetailInventories(request: express.Request, DispensaryInventoryId: string): Promise<DispensaryInventory>;
    CreateRetailInventories(request: express.Request, requestBody: DispensaryInventoryOwnerCreate): Promise<DispensaryInventory>;
    UpdateRetailInventories(DispensaryInventoryId: string, requestBody: DispensaryInventory, request: express.Request): Promise<DispensaryInventory>;
    deleteRetailInventories(DispensaryInventoryId: string, request: express.Request): Promise<boolean>;
}
