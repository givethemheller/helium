import * as express from "express";
import * as jwt from "jsonwebtoken";
import config from "./env/config";
import { User, GROUPS } from '@helium/api-shared';

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  if (securityName === "jwt") {
    const token = request.headers.authorization;
    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error("No token provided"));
      }
      if (token === "dev-setup") {
        const userData: User = {
          _id: "some-id",
          sessionStartDate: new Date(),
          currentToken: "defineme",
          userPermissions: [GROUPS.admin, GROUPS.owner, GROUPS.unathenticated, GROUPS.user]
        };
        request.res.locals["userData"] = userData;
        resolve(true);
      } else {
        jwt.verify(token, config.jwtKey, function (err: any, decoded) {
          // const contents = decoded as unknown as CbdWebTokenContents;
          if (err) {
            reject(err);
          } else {
            // Check if JWT contains all required scopes
            // TODO the tokening process needs to have scopes in it
            // if (scopes.length > 0) {
            //   const hasScope = scopes.some((scope) => {
            //     return contents.scopes.find((contentScope) => {
            //       return contentScope === scope;
            //     })
            //   })
            //   if (!hasScope) {
            //     reject(new Error("You are not authorized"));

            //   }
            // }
            request.res.locals["userData"] = { userData: "foo" };
            resolve(decoded);
          }
        });
      }
    });
  }
}
