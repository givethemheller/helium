import { Tool, ToolCreate } from "@helium/api-shared";
import * as express from "express";
export declare class toolController {
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
    AdminFindtool(request: express.Request, page?: number, count?: number): Promise<Tool[]>;
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
    Findtools(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<Tool[]>;
    Gettool(request: express.Request, toolId: string): Promise<Tool>;
    Createtool(request: express.Request, requestBody: ToolCreate): Promise<Tool>;
    Updatetool(toolId: string, requestBody: ToolCreate, request: express.Request): Promise<Tool>;
    deletetool(toolId: string, request: express.Request): Promise<boolean>;
}
