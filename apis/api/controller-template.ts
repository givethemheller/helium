export const modelControllerTemplate = `
{{=<% %>=}}
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
  <% objModel %>,  
  <% BaseType %>,
  <% BaseType %>Document, 
<%#operations.create.enabled %>
  <% BaseType %>Create,
  createDoc,
<%/operations.create.enabled %>
<% #operations.find.enabled %>
  findMany,
  findOne,
<%/operations.find.enabled %>
  updateDoc,
  deletDoc
} from "@helium/api-shared";
import * as express from "express";

@Route("<% objModel %>")
export class <% objModel %>Controller {

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
  @Tags("<% objModel %>")
  public async AdminFind<% objModel %>(
    @Request() request: express.Request,
    @Header("page") page: number = 1,
    @Header("count") count: number = 10
  ): Promise<<% BaseType %>[]> {
    if (page && count) {
      return findMany<<% BaseType %>Document, <% BaseType %>>(
        <% objModel %>,
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
      return findMany<<% BaseType %>Document,<% BaseType %>>(
        <% objModel %>,
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
  @Tags("<% objModel %>")
  public async Find<% objModel %>s(
    @Request() request: express.Request,
    @Body() requestBody: { conditions: any},
    @Header("page") page: number = 0,
    @Header("count") count: number = 20
  ): Promise<<% BaseType %>[]> {
    if (page && count) {
      return findMany<<% BaseType %>Document, <% BaseType %>>(
        <% objModel %>,
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
      return findMany<<% BaseType %>Document, <% BaseType %>>(
        <% objModel %>,
        requestBody.conditions,
        undefined,
        undefined,
        undefined,
        request.res.locals.userData
      );
    }
  }

  @Security("jwt", ["owner"])
  @Get("{<% objModel %>Id}")
  @Tags("<% objModel %>")
  public async Get<% objModel %>(
    @Request() request: express.Request,
    <% objModel %>Id: string
  ): Promise<<% BaseType %>> {
    return findOne<<% BaseType %>Document, <% BaseType %>>(<% objModel %>, false, <% objModel %>Id);
  }
<% #operations.create %>
  @Post()
  @Tags("<% objModel %>")
  public async Create<% objModel %>(
    @Request() request: express.Request,
    @Body() requestBody: <% BaseType %>Create
  ): Promise<<% BaseType %>> {
    return createDoc<<% BaseType %>Document, <% BaseType %>>(
      <% objModel %>,
      requestBody,
      request.res.locals.userData
    );
  }
<%/operations.create %>
  @Security("jwt", ["owner"])
  @Put("{<% objModel %>Id}")
  @Tags("<% objModel %>")
  public async Update<% objModel %>(
    <% objModel %>Id: string,
    @Body() requestBody: <% BaseType %>Create,
    @Request() request: express.Request
  ): Promise<<% BaseType %>> {
    return updateDoc<<% BaseType %>Document, <% BaseType %>>(
      <% objModel %>,
      <% objModel %>Id,
      [{ ...requestBody }],
      request.res.locals.userData
    );
  }

  @Security("jwt", ["owner"])
  @Delete("{<% objModel %>Id}")
  @Tags("<% objModel %>")
  public async delete<% objModel %>(
    <% objModel %>Id: string,
    @Request() request: express.Request
  ): Promise<boolean> {
    return deletDoc<<% BaseType %>Document, <% BaseType %>>(<% objModel %>, <% objModel %>Id, request.res.locals.userData);
  }
}
`;
