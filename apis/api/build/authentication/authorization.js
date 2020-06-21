"use strict";
// import { ApiError, userModel } from '@cannabinder/cbd-shared';
// import bcrypt from "bcrypt";
// import jsonwebtoken from "jsonwebtoken";
// import configs from "../env/config"
// export interface SignInData {
//   token: string;
//   userId: string;
// }
// export type SignInBody = {
//   id: string;
//   password: string;
//   mode: "phone" | "email"
// }
// export async function userSignIn(
//   id: SignInBody["id"],
//   password: SignInBody["password"],
//   mode: SignInBody["mode"]): Promise<SignInData> {
//   let search: { email?: string, phone?: string } = {};
//   if (mode === "phone") {
//     search["phone"] = id
//   } else {
//     search["email"] = id;
//   }
//   console.log(search)
//   return userModel.findOne(search).then((user) => {
//     console.log("your user", user);
//     if (user === null) {
//       throw new ApiError("unauthorized", 401, "username or password wrong")
//     }
//     return bcrypt.compare(password, user.password).then((match) => {
//       if (!match) {
//         throw new ApiError("unauthorized", 401, "username or password wrong")
//       }
//       const jwtToken = jsonwebtoken.sign(
//         {
//           email: user.email,
//           id: user._id
//         },
//         configs.jwtKey,
//         {
//           expiresIn: configs.tokenExp
//         }
//       );
//       user.currentToken = jwtToken
//       return user.save().then((res) => {
//         return ({ token: jwtToken, userId: user._id })
//       }, (err) => {
//         throw new ApiError("unauthorized", 401, "username or password wrong")
//       })
//     }, () => {
//       throw new ApiError("unauthorized", 401, "username or password wrong")
//     })
//   }, (err) => {
//     throw new ApiError("unauthorized", 401, "username or password wrong")
//   })
// }
//# sourceMappingURL=authorization.js.map