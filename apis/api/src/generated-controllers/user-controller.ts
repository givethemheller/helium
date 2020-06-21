
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
  user,  
  User,
  UserDocument, 
  UserCreate,
  createDoc,
  findMany,
  findOne,
  updateDoc,
  deletDoc
} from "@helium/api-shared";
import * as express from "express";

@Route("user")
export class userController {

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
  @Tags("user")
  public async AdminFinduser(
    @Request() request: express.Request,
    @Header("page") page: number = 1,
    @Header("count") count: number = 10
  ): Promise<User[]> {
    if (page && count) {
      return findMany<UserDocument, User>(
        user,
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
      return findMany<UserDocument,User>(
        user,
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
  @Tags("user")
  public async Findusers(
    @Request() request: express.Request,
    @Body() requestBody: { conditions: any},
    @Header("page") page: number = 0,
    @Header("count") count: number = 20
  ): Promise<User[]> {
    if (page && count) {
      return findMany<UserDocument, User>(
        user,
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
      return findMany<UserDocument, User>(
        user,
        requestBody.conditions,
        undefined,
        undefined,
        undefined,
        request.res.locals.userData
      );
    }
  }

  @Security("jwt", ["owner"])
  @Get("{userId}")
  @Tags("user")
  public async Getuser(
    @Request() request: express.Request,
    userId: string
  ): Promise<User> {
    return findOne<UserDocument, User>(user, false, userId);
  }
  @Post()
  @Tags("user")
  public async Createuser(
    @Request() request: express.Request,
    @Body() requestBody: UserCreate
  ): Promise<User> {
    return createDoc<UserDocument, User>(
      user,
      requestBody,
      request.res.locals.userData
    );
  }
  @Security("jwt", ["owner"])
  @Put("{userId}")
  @Tags("user")
  public async Updateuser(
    userId: string,
    @Body() requestBody: UserCreate,
    @Request() request: express.Request
  ): Promise<User> {
    return updateDoc<UserDocument, User>(
      user,
      userId,
      [{ ...requestBody }],
      request.res.locals.userData
    );
  }

  @Security("jwt", ["owner"])
  @Delete("{userId}")
  @Tags("user")
  public async deleteuser(
    userId: string,
    @Request() request: express.Request
  ): Promise<boolean> {
    return deletDoc<UserDocument, User>(user, userId, request.res.locals.userData);
  }
}
