
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
  service,  
  Service,
  ServiceDocument, 
  ServiceCreate,
  createDoc,
  findMany,
  findOne,
  updateDoc,
  deletDoc
} from "@helium/api-shared";
import * as express from "express";

@Route("service")
export class serviceController {

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
  @Tags("service")
  public async AdminFindservice(
    @Request() request: express.Request,
    @Header("page") page: number = 1,
    @Header("count") count: number = 10
  ): Promise<Service[]> {
    if (page && count) {
      return findMany<ServiceDocument, Service>(
        service,
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
      return findMany<ServiceDocument,Service>(
        service,
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
  @Tags("service")
  public async Findservices(
    @Request() request: express.Request,
    @Body() requestBody: { conditions: any},
    @Header("page") page: number = 0,
    @Header("count") count: number = 20
  ): Promise<Service[]> {
    if (page && count) {
      return findMany<ServiceDocument, Service>(
        service,
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
      return findMany<ServiceDocument, Service>(
        service,
        requestBody.conditions,
        undefined,
        undefined,
        undefined,
        request.res.locals.userData
      );
    }
  }

  @Security("jwt", ["owner"])
  @Get("{serviceId}")
  @Tags("service")
  public async Getservice(
    @Request() request: express.Request,
    serviceId: string
  ): Promise<Service> {
    return findOne<ServiceDocument, Service>(service, false, serviceId);
  }
  @Post()
  @Tags("service")
  public async Createservice(
    @Request() request: express.Request,
    @Body() requestBody: ServiceCreate
  ): Promise<Service> {
    return createDoc<ServiceDocument, Service>(
      service,
      requestBody,
      request.res.locals.userData
    );
  }
  @Security("jwt", ["owner"])
  @Put("{serviceId}")
  @Tags("service")
  public async Updateservice(
    serviceId: string,
    @Body() requestBody: ServiceCreate,
    @Request() request: express.Request
  ): Promise<Service> {
    return updateDoc<ServiceDocument, Service>(
      service,
      serviceId,
      [{ ...requestBody }],
      request.res.locals.userData
    );
  }

  @Security("jwt", ["owner"])
  @Delete("{serviceId}")
  @Tags("service")
  public async deleteservice(
    serviceId: string,
    @Request() request: express.Request
  ): Promise<boolean> {
    return deletDoc<ServiceDocument, Service>(service, serviceId, request.res.locals.userData);
  }
}
