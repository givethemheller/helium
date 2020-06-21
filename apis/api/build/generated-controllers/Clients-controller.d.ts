import { Entity, EntityOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class EntityController {
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
    AdminFindEntity(request: express.Request, page?: number, count?: number): Promise<Entity[]>;
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
    FindClientss(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<Entity[]>;
    GetClients(request: express.Request, EntityId: string): Promise<Entity>;
    CreateClients(request: express.Request, requestBody: EntityOwnerCreate): Promise<Entity>;
    UpdateClients(EntityId: string, requestBody: Entity, request: express.Request): Promise<Entity>;
    deleteClients(EntityId: string, request: express.Request): Promise<boolean>;
}
