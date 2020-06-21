
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
  part,  
  Part,
  PartDocument, 
  PartCreate,
  createDoc,
  findMany,
  findOne,
  updateDoc,
  deletDoc
} from "@helium/api-shared";
import * as express from "express";

@Route("part")
export class partController {

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
  @Tags("part")
  public async AdminFindpart(
    @Request() request: express.Request,
    @Header("page") page: number = 1,
    @Header("count") count: number = 10
  ): Promise<Part[]> {
    if (page && count) {
      return findMany<PartDocument, Part>(
        part,
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
      return findMany<PartDocument,Part>(
        part,
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
  @Tags("part")
  public async Findparts(
    @Request() request: express.Request,
    @Body() requestBody: { conditions: any},
    @Header("page") page: number = 0,
    @Header("count") count: number = 20
  ): Promise<Part[]> {
    if (page && count) {
      return findMany<PartDocument, Part>(
        part,
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
      return findMany<PartDocument, Part>(
        part,
        requestBody.conditions,
        undefined,
        undefined,
        undefined,
        request.res.locals.userData
      );
    }
  }

  @Security("jwt", ["owner"])
  @Get("{partId}")
  @Tags("part")
  public async Getpart(
    @Request() request: express.Request,
    partId: string
  ): Promise<Part> {
    return findOne<PartDocument, Part>(part, false, partId);
  }
  @Post()
  @Tags("part")
  public async Createpart(
    @Request() request: express.Request,
    @Body() requestBody: PartCreate
  ): Promise<Part> {
    return createDoc<PartDocument, Part>(
      part,
      requestBody,
      request.res.locals.userData
    );
  }
  @Security("jwt", ["owner"])
  @Put("{partId}")
  @Tags("part")
  public async Updatepart(
    partId: string,
    @Body() requestBody: PartCreate,
    @Request() request: express.Request
  ): Promise<Part> {
    return updateDoc<PartDocument, Part>(
      part,
      partId,
      [{ ...requestBody }],
      request.res.locals.userData
    );
  }

  @Security("jwt", ["owner"])
  @Delete("{partId}")
  @Tags("part")
  public async deletepart(
    partId: string,
    @Request() request: express.Request
  ): Promise<boolean> {
    return deletDoc<PartDocument, Part>(part, partId, request.res.locals.userData);
  }
}
