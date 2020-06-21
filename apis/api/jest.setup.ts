/**
 * WIP - will provide setup for jest when running automated tests based on the configs
 */


// import { UserOwnerCreate } from "@cannabinder/cbd-shared";
// import supertest from "supertest";
// import app from "./src/app";

// export let consumer: UserOwnerCreate = {
//   age: 22,
//   email: "consumer@akdfjlakjdflkajdf.com",
//   password: "test-password1",
//   phone: 12068238946,
// };

// export let adminUser: UserOwnerCreate = {
//   age: 22,
//   email: "admin@akdfjlakjdflkajdf.com",
//   password: "test-password1",
// };

// export default function () {

//   supertest(app)
//     .post('/v1/user')
//     .send(consumer)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200, (response) => {
//       consumer = response.body;
//     })

//   supertest(app)
//     .post('/v1/authentication/signin')
//     .send({ id: adminUser.email, mode: "email", password: adminUser.password })
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200, (response) => {
//       consumer = response.body;
//     })

//   supertest(app)
//     .post('/v1/user')
//     .send(adminUser)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200, (response) => {
//       adminUser = response.body;
//     })


//   supertest(app)
//     .post('/v1/user')
//     .send(adminUser)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200, (response) => {
//       adminUser = response.body;
//     })

//   supertest(app)
//     .post('/v1/authentication/signin')
//     .send({ id: "adminUser@test.com", })
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .expect((response) => {
//       console.log(response)
//     })
//   return;
// }

