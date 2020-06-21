
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
  boat,  
  Boat,
  BoatDocument, 
  BoatCreate,
  createDoc,
  findMany,
  findOne,
  updateDoc,
  deletDoc
} from "@helium/api-shared";
import * as express from "express";

@Route("boat")
export class boatController {

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
  @Tags("boat")
  public async AdminFindboat(
    @Request() request: express.Request,
    @Header("page") page: number = 1,
    @Header("count") count: number = 10
  ): Promise<Boat[]> {
    if (page && count) {
      return findMany<BoatDocument, Boat>(
        boat,
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
      return findMany<BoatDocument,Boat>(
        boat,
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
  @Tags("boat")
  public async Findboats(
    @Request() request: express.Request,
    @Body() requestBody: { conditions: any},
    @Header("page") page: number = 0,
    @Header("count") count: number = 20
  ): Promise<Boat[]> {
    if (page && count) {
      return findMany<BoatDocument, Boat>(
        boat,
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
      return findMany<BoatDocument, Boat>(
        boat,
        requestBody.conditions,
        undefined,
        undefined,
        undefined,
        request.res.locals.userData
      );
    }
  }

  @Security("jwt", ["owner"])
  @Get("{boatId}")
  @Tags("boat")
  public async Getboat(
    @Request() request: express.Request,
    boatId: string
  ): Promise<Boat> {
    return findOne<BoatDocument, Boat>(boat, false, boatId);
  }
  @Post()
  @Tags("boat")
  public async Createboat(
    @Request() request: express.Request,
    @Body() requestBody: BoatCreate
  ): Promise<Boat> {
    return createDoc<BoatDocument, Boat>(
      boat,
      requestBody,
      request.res.locals.userData
    );
  }
  @Security("jwt", ["owner"])
  @Put("{boatId}")
  @Tags("boat")
  public async Updateboat(
    boatId: string,
    @Body() requestBody: BoatCreate,
    @Request() request: express.Request
  ): Promise<Boat> {
    return updateDoc<BoatDocument, Boat>(
      boat,
      boatId,
      [{ ...requestBody }],
      request.res.locals.userData
    );
  }

  @Security("jwt", ["owner"])
  @Delete("{boatId}")
  @Tags("boat")
  public async deleteboat(
    boatId: string,
    @Request() request: express.Request
  ): Promise<boolean> {
    return deletDoc<BoatDocument, Boat>(boat, boatId, request.res.locals.userData);
  }
}
