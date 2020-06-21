import { LoyaltyPointOffer, LoyaltyPointOfferOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class LoyaltyPointOfferController {
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
    AdminFindLoyaltyPointOffer(request: express.Request, page?: number, count?: number): Promise<LoyaltyPointOffer[]>;
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
    FindLoyaltyPointss(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<LoyaltyPointOffer[]>;
    GetLoyaltyPoints(request: express.Request, LoyaltyPointOfferId: string): Promise<LoyaltyPointOffer>;
    CreateLoyaltyPoints(request: express.Request, requestBody: LoyaltyPointOfferOwnerCreate): Promise<LoyaltyPointOffer>;
    UpdateLoyaltyPoints(LoyaltyPointOfferId: string, requestBody: LoyaltyPointOffer, request: express.Request): Promise<LoyaltyPointOffer>;
    deleteLoyaltyPoints(LoyaltyPointOfferId: string, request: express.Request): Promise<boolean>;
}
