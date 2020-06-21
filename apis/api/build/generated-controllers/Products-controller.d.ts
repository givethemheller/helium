import { Product, ProductOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class ProductController {
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
    AdminFindProduct(request: express.Request, page?: number, count?: number): Promise<Product[]>;
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
    FindProductss(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<Product[]>;
    GetProducts(request: express.Request, ProductId: string): Promise<Product>;
    CreateProducts(request: express.Request, requestBody: ProductOwnerCreate): Promise<Product>;
    UpdateProducts(ProductId: string, requestBody: Product, request: express.Request): Promise<Product>;
    deleteProducts(ProductId: string, request: express.Request): Promise<boolean>;
}
