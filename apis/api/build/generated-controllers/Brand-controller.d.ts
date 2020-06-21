import { Brand, BrandOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class BrandController {
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
    AdminFindBrand(request: express.Request, page?: number, count?: number): Promise<Brand[]>;
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
    FindBrands(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<Brand[]>;
    GetBrand(request: express.Request, BrandId: string): Promise<Brand>;
    CreateBrand(request: express.Request, requestBody: BrandOwnerCreate): Promise<Brand>;
    UpdateBrand(BrandId: string, requestBody: Brand, request: express.Request): Promise<Brand>;
    deleteBrand(BrandId: string, request: express.Request): Promise<boolean>;
}
