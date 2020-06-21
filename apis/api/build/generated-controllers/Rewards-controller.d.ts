import { LoyaltyOffer, LoyaltyOfferOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class LoyaltyOfferController {
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
    AdminFindLoyaltyOffer(request: express.Request, page?: number, count?: number): Promise<LoyaltyOffer[]>;
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
    FindRewardss(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<LoyaltyOffer[]>;
    GetRewards(request: express.Request, LoyaltyOfferId: string): Promise<LoyaltyOffer>;
    CreateRewards(request: express.Request, requestBody: LoyaltyOfferOwnerCreate): Promise<LoyaltyOffer>;
    UpdateRewards(LoyaltyOfferId: string, requestBody: LoyaltyOffer, request: express.Request): Promise<LoyaltyOffer>;
    deleteRewards(LoyaltyOfferId: string, request: express.Request): Promise<boolean>;
}
