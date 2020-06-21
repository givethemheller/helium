import * as express from "express";
import { CbdWebToken, UserOwnerCreate, UserOwner } from "@cannabinder/cbd-shared";
import { SignInBody, SignInData } from '../authentication/authorization';
export declare class AuthenticationController {
    validate(): Promise<CbdWebToken>;
    signIn(request: express.Request, requestBody: SignInBody): Promise<SignInData>;
    signup(request: express.Request, requestBody: UserOwnerCreate): Promise<UserOwner>;
}
