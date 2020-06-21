
import {
  Get,
  Route,
  Tags,
  Header,
  Request,
  Post,
  Body,
  Put,
  Delete,
  Security
} from "tsoa";
import {
  system,  
  System,
  SystemDocument, 
  SystemCreate,
  createDoc,
  findMany,
  findOne,
  updateDoc,
  deletDoc
} from "@helium/api-shared";
import * as express from "express";

@Route("system")
export class systemController {

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
  @Security("jwt", ["admin"])
  @Post("find/all")
  @Tags("system")
  public async AdminFindsystem(
    @Request() request: express.Request,
    @Header("page") page: number = 1,
    @Header("count") count: number = 10
  ): Promise<System[]> {
    if (page && count) {
      return findMany<SystemDocument, System>(
        system,
        false,
        false,
        {
          count,
          page
        },
        undefined,
        request.res.locals.userData
      );
    } else {
      return findMany<SystemDocument,System>(
        system,
        undefined,
        undefined,
        undefined,
        undefined,
        request.res.locals.userData
      );
    }
  }

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
  @Security("jwt", ["admin"])
  @Post("find")
  @Tags("system")
  public async Findsystems(
    @Request() request: express.Request,
    @Body() requestBody: { conditions: any},
    @Header("page") page: number = 0,
    @Header("count") count: number = 20
  ): Promise<System[]> {
    if (page && count) {
      return findMany<SystemDocument, System>(
        system,
        requestBody.conditions,
        false,
        {
          count,
          page
        },
        undefined,
        request.res.locals.userData
      );
    } else {
      return findMany<SystemDocument, System>(
        system,
        requestBody.conditions,
        undefined,
        undefined,
        undefined,
        request.res.locals.userData
      );
    }
  }

  @Security("jwt", ["owner"])
  @Get("{systemId}")
  @Tags("system")
  public async Getsystem(
    @Request() request: express.Request,
    systemId: string
  ): Promise<System> {
    return findOne<SystemDocument, System>(system, false, systemId);
  }
  @Post()
  @Tags("system")
  public async Createsystem(
    @Request() request: express.Request,
    @Body() requestBody: SystemCreate
  ): Promise<System> {
    return createDoc<SystemDocument, System>(
      system,
      requestBody,
      request.res.locals.userData
    );
  }
  @Security("jwt", ["owner"])
  @Put("{systemId}")
  @Tags("system")
  public async Updatesystem(
    systemId: string,
    @Body() requestBody: SystemCreate,
    @Request() request: express.Request
  ): Promise<System> {
    return updateDoc<SystemDocument, System>(
      system,
      systemId,
      [{ ...requestBody }],
      request.res.locals.userData
    );
  }

  @Security("jwt", ["owner"])
  @Delete("{systemId}")
  @Tags("system")
  public async deletesystem(
    systemId: string,
    @Request() request: express.Request
  ): Promise<boolean> {
    return deletDoc<SystemDocument, System>(system, systemId, request.res.locals.userData);
  }
}
