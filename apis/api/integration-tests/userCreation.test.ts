
// import { UserOwnerCreate } from '@cannabinder/cbd-shared';
// import http from "http";
// const request = require('supertest');
import supertest from 'supertest';
import { UserOwnerCreate } from "@cannabinder/cbd-shared";
import app from "../src/app";
import mongoConnect from '../src/mongoConnect';
import mongoose from "mongoose";
import { assert } from 'chai';

beforeAll((done) => {
  mongoConnect().then(done)
})

afterAll((done) => {
  mongoose.connection.close(done);
})

const newUser: UserOwnerCreate = {
  age: 22,
  email: "testuser1@akdfjlakjdflkajdf.com",
  password: "test-password1",
  phone: 12068238946,
};

const invalidFieldsUser: any = {
  age: 22,
  email: "testuser3@okjlkadflkjadflkadfhadlfkj.com",
  password: "test-password1",
  phone: 12068238934
};
const newEmptyUser: UserOwnerCreate = {
  age: 22
}
const userPhoneOnly: UserOwnerCreate = {
  age: 22,
  password: "test-password1",
  phone: 4028394819,
};


describe('POST /v1/authentication', function () {
  it('strips restricted content from user creates', function (done) {
    supertest(app)
      .post('/v1/authentication/signup')
      .send({
        ...invalidFieldsUser, ...{
          adminUser: true,
          foo: "bar"
        }
      })
      .set('Accept', 'application/json')

      .expect(response => {
        // expect(response).toMatchSnapshot("inavlid-user-response");
        assert.containsAllKeys(response.body, invalidFieldsUser);
        // assert.doesNotHaveAllKeys(response.body, ["adminUSer", "foo"]);
        assert.lengthOf(Object.keys(response.body), Object.keys(invalidFieldsUser).length + 2);
      })
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('enforces validation of user acccounts', function (done) {
    supertest(app)
      .post('/v1/authentication/signup')
      .send({ ...newUser, ...{ phone: "12223", email: "no@__" } })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done)
  });
  it('Allows the creation of a valid account', async function (done) {
    supertest(app)
      .post('/v1/authentication/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(() => {
        supertest(app)
          .post('/v1/authentication/signin')
          .send({ id: newUser.email, password: newUser.password, mode: "email" })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .expect((response) => {
            console.log(response);
            assert.containsAllKeys(response.body, ["token", "userId"]);
          })
          .end(function (err, res) {
            if (err) return done(err);
            done();
          });
      })


  });

  it('Prevents duplications of accounts', function (done) {
    supertest(app)
      .post('/v1/authentication/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500, done)
  });
  it('Requires an email address or a phone number', function (done) {
    supertest(app)
      .post('/v1/authentication/signup')
      .send(newEmptyUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  it('Requires an email address or a phone number', function (done) {
    supertest(app)
      .post('/v1/authentication/signup')
      .send(userPhoneOnly)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});