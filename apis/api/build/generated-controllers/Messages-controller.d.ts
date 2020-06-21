import { UserMessage, UserMessageOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class UserMessageController {
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
    AdminFindUserMessage(request: express.Request, page?: number, count?: number): Promise<UserMessage[]>;
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
    FindMessagess(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<UserMessage[]>;
    GetMessages(request: express.Request, UserMessageId: string): Promise<UserMessage>;
    CreateMessages(request: express.Request, requestBody: UserMessageOwnerCreate): Promise<UserMessage>;
    UpdateMessages(UserMessageId: string, requestBody: UserMessage, request: express.Request): Promise<UserMessage>;
    deleteMessages(UserMessageId: string, request: express.Request): Promise<boolean>;
}
