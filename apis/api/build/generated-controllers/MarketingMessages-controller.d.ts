import { LoyaltyMessage, LoyaltyMessageOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class LoyaltyMessageController {
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
    AdminFindLoyaltyMessage(request: express.Request, page?: number, count?: number): Promise<LoyaltyMessage[]>;
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
    FindMarketingMessagess(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<LoyaltyMessage[]>;
    GetMarketingMessages(request: express.Request, LoyaltyMessageId: string): Promise<LoyaltyMessage>;
    CreateMarketingMessages(request: express.Request, requestBody: LoyaltyMessageOwnerCreate): Promise<LoyaltyMessage>;
    UpdateMarketingMessages(LoyaltyMessageId: string, requestBody: LoyaltyMessage, request: express.Request): Promise<LoyaltyMessage>;
    deleteMarketingMessages(LoyaltyMessageId: string, request: express.Request): Promise<boolean>;
}
