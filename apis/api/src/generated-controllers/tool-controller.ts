
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
  tool,  
  Tool,
  ToolDocument, 
  ToolCreate,
  createDoc,
  findMany,
  findOne,
  updateDoc,
  deletDoc
} from "@helium/api-shared";
import * as express from "express";

@Route("tool")
export class toolController {

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
  @Tags("tool")
  public async AdminFindtool(
    @Request() request: express.Request,
    @Header("page") page: number = 1,
    @Header("count") count: number = 10
  ): Promise<Tool[]> {
    if (page && count) {
      return findMany<ToolDocument, Tool>(
        tool,
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
      return findMany<ToolDocument,Tool>(
        tool,
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
  @Tags("tool")
  public async Findtools(
    @Request() request: express.Request,
    @Body() requestBody: { conditions: any},
    @Header("page") page: number = 0,
    @Header("count") count: number = 20
  ): Promise<Tool[]> {
    if (page && count) {
      return findMany<ToolDocument, Tool>(
        tool,
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
      return findMany<ToolDocument, Tool>(
        tool,
        requestBody.conditions,
        undefined,
        undefined,
        undefined,
        request.res.locals.userData
      );
    }
  }

  @Security("jwt", ["owner"])
  @Get("{toolId}")
  @Tags("tool")
  public async Gettool(
    @Request() request: express.Request,
    toolId: string
  ): Promise<Tool> {
    return findOne<ToolDocument, Tool>(tool, false, toolId);
  }
  @Post()
  @Tags("tool")
  public async Createtool(
    @Request() request: express.Request,
    @Body() requestBody: ToolCreate
  ): Promise<Tool> {
    return createDoc<ToolDocument, Tool>(
      tool,
      requestBody,
      request.res.locals.userData
    );
  }
  @Security("jwt", ["owner"])
  @Put("{toolId}")
  @Tags("tool")
  public async Updatetool(
    toolId: string,
    @Body() requestBody: ToolCreate,
    @Request() request: express.Request
  ): Promise<Tool> {
    return updateDoc<ToolDocument, Tool>(
      tool,
      toolId,
      [{ ...requestBody }],
      request.res.locals.userData
    );
  }

  @Security("jwt", ["owner"])
  @Delete("{toolId}")
  @Tags("tool")
  public async deletetool(
    toolId: string,
    @Request() request: express.Request
  ): Promise<boolean> {
    return deletDoc<ToolDocument, Tool>(tool, toolId, request.res.locals.userData);
  }
}
