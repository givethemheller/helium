"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var cbd_shared_1 = require("@cannabinder/cbd-shared");
var bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
var jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
// import async from "async";
// import { Model, Document } from "mongoose";
// import { IApiToken } from "./automationApi";
// import { EntityDocument } from "../models/model-entity";
// const env = require("../env/environment");
var cbd_shared_2 = require("@cannabinder/cbd-shared");
var cbd_shared_3 = require("@cannabinder/cbd-shared");
// const userController = require("../crudControllers/ctrl-users");
// const entityController = require("../crudControllers/ctrl-entities");
function validateToken(token, jwtKey) {
    try {
        return jsonwebtoken_1.default.verify(token, jwtKey);
    }
    catch (error) {
        throw new error("invalid token");
    }
}
exports.validateToken = validateToken;
function getUserFromToken(token, jwtKey) {
    var decoded = jsonwebtoken_1.default.verify(token, jwtKey);
    return new Promise(function (resolve, reject) {
        cbd_shared_3.findOne(cbd_shared_1.UserModel, [{ email: decoded.email }]).then(function (user) {
            if (JSON.stringify(user._id) === JSON.stringify(decoded.id)) {
                resolve(user);
            }
            else {
                reject("Invalid Session");
            }
        }, function (rejected) {
            reject(rejected.toString());
        });
    });
}
exports.getUserFromToken = getUserFromToken;
function generateNewToken(token, config) {
    return new Promise(function (resolve, reject) {
        getUserFromToken(token, config.jwtKey).then(function (user) {
            var decoded = jsonwebtoken_1.default.verify(token, config.jwtKey);
            if (JSON.stringify(user._id) === JSON.stringify(decoded.id)) {
                var sessionStartDate = new Date(user.sessionStartDate);
                var currentDate = new Date();
                var timeDelta = currentDate.getTime() - sessionStartDate.getTime();
                // standard users on a much larger session duration
                var sessionDuration = config.userSessionDurationSeconds;
                if (user.adminUser === true) {
                    sessionDuration = config.adminSessionDurationSeconds;
                }
                if (timeDelta / 1000 > sessionDuration) {
                    reject("session duratoin was exceeded");
                }
                else {
                    var newToken = jsonwebtoken_1.default.sign({ email: decoded.email, id: decoded.id }, config.jwtKey, { expiresIn: sessionDuration });
                    resolve(newToken);
                }
            }
            else {
                reject("Invalid Session");
            }
        }, function (rejected) {
            reject(rejected.toString());
        });
    });
}
exports.generateNewToken = generateNewToken;
function checkTokenService(token, config) {
    return new Promise(function (resolve, reject) {
        getUserFromToken(token, config.jwtKey).then(function () {
            resolve(true);
        }, function (rejected) {
            reject(rejected.toString());
        });
    });
}
exports.checkTokenService = checkTokenService;
function checkTokenAdmin(token, config) {
    return new Promise(function (resolve, reject) {
        getUserFromToken(token, config.jwtKey).then(function (user) {
            if (user.adminUser === true) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }, function (rejected) {
            reject(rejected.toString());
        });
    });
}
function validateLoyaltyAccess(entity) {
    // because this was moved off the request, lets add it back
    if (entity.loyaltyEnabled === true) {
        return true;
    }
    else {
        return false;
    }
}
exports.validateLoyaltyAccess = validateLoyaltyAccess;
// export function checkUserRightsOnEntity(
//   token: string,
//   entityId: string,
//   config: Pick<Configurations, "jwtKey">
// ): Promise<Entity> {
//   return new Promise((resolve, reject) => {
//     try {
//       async.series<User | Entity, any>(
//         [
//           callback => {
//             // fetch the user from the token
//             getUserFromToken(token, config.jwtKey).then(
//               user => {
//                 callback(null, user);
//               },
//               rejected => {
//                 callback(rejected.toString());
//               }
//             );
//           },
//           callback => {
//             // fetch the entity from the entityId
//             findOne<EntityDocument, Entity>(entityModel, false, entityId).then(
//               entity => {
//                 callback(null, entity);
//               },
//               rejected => {
//                 callback(rejected.toString());
//               }
//             );
//           }
//         ],
//         // optional callback
//         (err, results) => {
//           // compare the entity to the users assigned entity
//           if (err) {
//             console.warn(
//               "An error occured when fetching from the DB in checkUserRightsOnEntity ",
//               JSON.stringify(err)
//             );
//             reject(
//               "An error occured when fetching from the DB in checkUserRightsOnEntity "
//             );
//           } else {
//             const user = results[0] as User;
//             const entity = results[1] as Entity;
//             if (
//               user.adminUser === true ||
//               ((typeof entity.adminUser === "object" ||
//                 typeof entity.adminUser === "string") &&
//                 entity.adminUser.toString() === user._id.toString())
//             ) {
//               resolve(entity);
//             } else {
//               console.warn(
//                 "Unauthorized Access or error in checkUserRightsOnEntity",
//                 JSON.stringify(err)
//               );
//               reject("Unauthorized Access or error in checkUserRightsOnEntity");
//             }
//           }
//         }
//       );
//     } catch (err) {
//       console.warn(
//         "Authenticate user on client likely failed a token validation ",
//         JSON.stringify(err)
//       );
//       reject("There wasn an unknown error on the server");
//     }
//   });
// }
function userSignUp(emailApiKey, userData) {
    return new Promise(function (resolve, reject) {
        bcrypt_1.default.hash(userData.password, 10, function (err, hash) {
            if (err) {
                reject(err.toString());
            }
            else {
                cbd_shared_3.findOne(cbd_shared_1.UserModel, [{ email: userData.email }]).then(function (user) {
                    if (!user) {
                        var dateTime = new Date();
                        var newUser = new cbd_shared_1.UserModel({
                            email: userData.email,
                            password: hash,
                            dispensaryUser: userData.accountType === "dispensary",
                            adminUser: false,
                            processorUser: userData.accountType === "producer",
                            sessionStartDate: dateTime
                        });
                        newUser.save(function (error, savedUser) {
                            if (error) {
                                reject(error.toString());
                            }
                            else {
                                cbd_shared_2.CbdEmail.sendUserSignupEmail(emailApiKey, savedUser.toObject());
                                cbd_shared_2.CbdEmail.signupAlert(emailApiKey, savedUser.toObject());
                                resolve(savedUser.toObject());
                            }
                        });
                    }
                    else {
                        reject("user already exsists");
                    }
                }, function (rejected) {
                    reject(rejected.toString());
                });
            }
        });
    });
}
exports.userSignUp = userSignUp;
// export function userSignIn(): Promise<{token: string, user: User}> {
//   UserModel
//     .findOne(
//       { email: req.body.email },
//       "+facebookProvider +twitterProvider +googleProvider +password"
//     )
//     .exec()
//     .then(function(theUser) {
//       if (theUser === null) {
//         res.status(401).json({
//           error: true,
//           errorMessage: "Username or Password Wrong"
//         });
//       } else {
//         bcrypt.compare(req.body.password, theUser.password, function(
//           err,
//           result
//         ) {
//           if (err) {
//             res.status(401).json({
//               error: true,
//               errorMessage: "Username or Password Wrong"
//             });
//           } else if (result) {
//             const jwtToken = jsonwebtoken.sign(
//               {
//                 email: theUser.email,
//                 id: theUser._id
//               },
//               env.jwtKey,
//               {
//                 expiresIn: env.tokenExp
//               }
//             );
//             const dateTime = new Date();
//             const userUpdate = { sessionStartDate: dateTime };
//             UserModel.findByIdAndUpdate(
//               { _id: theUser._id },
//               userUpdate,
//               { new: true },
//               (updateErr, userUpdated) => {
//                 if (updateErr) {
//                   console.warn(updateErr);
//                   res.status(500).json({
//                     error: true,
//                     errorMessage: "Username or Password Wrong" + updateErr
//                   });
//                 } else {
//                   console.log("the user after updating sessionStartDate");
//                   console.log(userUpdated);
//                   // Remove unwanted fields
//                   userUpdated = {
//                     ...userUpdated,
//                     googleProvider: undefined,
//                     facebookProvider: undefined,
//                     twitterProvider: undefined,
//                     deletedDate: undefined
//                   };
//                   res.status(200).json({
//                     success: "Welcome to the JWT Auth",
//                     token: jwtToken,
//                     user: userUpdated
//                   });
//                 }
//               }
//             );
//           } else {
//             res.status(401).json({
//               error: true,
//               errorMessage: "Username or Password Wrong"
//             });
//           }
//         });
//       }
//     })
//     .catch(error => {
//       // console.warn(error)
//       res.status(500).json({
//         error
//       });
//     });
// }
// export function changePassword(req: Request, res: Response) {
//   const decoded: any = jsonwebtoken.decode(req.params.token, env.jwtKey);
//   userController.getByEmail(decoded.email, (user: UserDocument) => {
//     if (JSON.stringify(user._id) === JSON.stringify(decoded.id)) {
//       bcrypt.compare(req.body.password, user.password, function(err, result) {
//         if (err) {
//           res.status(401).json({
//             error: true,
//             errorMessage: "Wrong Password"
//           });
//         } else if (result) {
//           if (req.body.passwordNew !== req.body.passwordVer) {
//             res.status(401).json({
//               error: true,
//               errorMessage: "New passwords do not match"
//             });
//           }
//           bcrypt.hash(req.body.passwordNew, 10, function(bcryptError, hash) {
//             if (bcryptError) {
//               res.status(500).json({
//                 error: bcryptError
//               });
//             } else {
//               user.password = hash;
//               user.save(function(error, savedUser) {
//                 if (error) {
//                   res.status(500).json({
//                     error
//                   });
//                 }
//                 emailer.passwordHasChanged(savedUser);
//                 res.status(200).json({
//                   success: "Password has been changed",
//                   user: savedUser
//                 });
//               });
//             }
//           });
//         } else {
//           res.status(401).json({
//             error: true,
//             errorMessage: "Wrong Password"
//           });
//         }
//       });
//     } else {
//       res.status(400).send();
//     }
//   });
// }
// export function resetUserPassword(req: Request, res: Response) {
//   const email = req.params.email;
//   userController.getByEmail(email, (user: UserDocument) => {
//     if (user === null) {
//       res.status(200).json({
//         success: "Password has been reset and is valid for 30 minutes"
//       });
//     } else {
//       user.passwordResetHash = randomString(20);
//       user.passwordResetExpires = new Date(new Date().getTime() + 30 * 60000);
//       user.save(function(error, savedUser) {
//         if (error) {
//           res.status(500).json({
//             error
//           });
//         } else {
//           emailer.passwordReset(savedUser);
//           res.status(200).json({
//             success: "Password has been reset and is valid for 30 minutes"
//           });
//         }
//       });
//     }
//   });
// }
// export function updateUserPassword(req: Request, res: Response) {
//   // /:resetToken/:email"
//   const email = req.body.email;
//   const token = req.params.resetToken;
//   userController.getByEmail(email, (user: UserDocument) => {
//     if (user === null) {
//       res.status(401).json({
//         error: true,
//         errorMessage: "Invalid request"
//       });
//     } else if (req.body.passwordNew !== req.body.passwordVer) {
//       res.status(401).json({
//         error: true,
//         errorMessage: "New passwords do not match"
//       });
//     } else if (new Date() > user.passwordResetExpires) {
//       res.status(401).json({
//         error: true,
//         errorMessage: "Reset token has expired"
//       });
//     } else if (token !== user.passwordResetHash) {
//       res.status(401).json({
//         error: true,
//         errorMessage: "Invalid request"
//       });
//     } else {
//       bcrypt.hash(req.body.passwordNew, 10, function(err, hash) {
//         if (err) {
//           res.status(500).json({
//             error: err
//           });
//         } else {
//           user.password = hash;
//           user.save(function(error, savedUser) {
//             if (error) {
//               res.status(500).json({
//                 error
//               });
//             } else {
//               emailer.passwordHasChanged(savedUser);
//               const jwtToken = jsonwebtoken.sign(
//                 {
//                   email: savedUser.email,
//                   id: savedUser._id
//                 },
//                 env.jwtKey,
//                 {
//                   expiresIn: env.tokenExp
//                 }
//               );
//               res.status(200).json({
//                 success: "Password has been reset",
//                 token: jwtToken,
//                 user: savedUser
//               });
//             }
//           });
//         }
//       });
//     }
//   });
// }
module.exports = {
    validateToken: validateToken,
    userSignUp: userSignUp,
    // userSignIn,
    // validateAdmin,
    //  adminValidator,
    generateNewToken: generateNewToken,
    checkTokenAdmin: checkTokenAdmin,
    // checkTokenApi,
    // checkUserRightsOnEntity,
    checkTokenService: checkTokenService,
    // changePassword,
    // updateUserPassword,
    // resetUserPassword,
    // randomString,
    validateLoyaltyAccess: validateLoyaltyAccess
};
//# sourceMappingURL=authentication.js.map