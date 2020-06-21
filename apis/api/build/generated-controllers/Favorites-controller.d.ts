import { BinderItem, BinderItemOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class BinderItemController {
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
    AdminFindBinderItem(request: express.Request, page?: number, count?: number): Promise<BinderItem[]>;
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
    FindFavoritess(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<BinderItem[]>;
    GetFavorites(request: express.Request, BinderItemId: string): Promise<BinderItem>;
    CreateFavorites(request: express.Request, requestBody: BinderItemOwnerCreate): Promise<BinderItem>;
    UpdateFavorites(BinderItemId: string, requestBody: BinderItem, request: express.Request): Promise<BinderItem>;
    deleteFavorites(BinderItemId: string, request: express.Request): Promise<boolean>;
}
