require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const request = require('supertest');
chai.use(chaiHttp);
let should = chai.should();
const User = require('../models/User');

// const start = require('./index');

const connectDB = require('../db/connect');
const authRouter = require('../routes/auth');
const entryRouter = require('../routes/entries');
// const conn = require('../test/index');

// describe('POST /register', () => {
//   before((done) => {
//     conn
//       .connect()
//       .then(done, done)
//       //   .then(() => done())
//       .catch((err) => done(err));
//   });

//   after((done) => {
//     conn
//       .close()
//       .then(done, done)
//       //   .then(() => done())
//       .catch((err) => done(err));
//   });

//   it('it should POST a user', (done) => {
//     request(authRouter)
//       .post('/register')
//       .send({ name: 'JessNew', email: 'jessnew@mail.com', password: '123' })
//       .then((res) => {
//         const body = res.body;
//         expect(body).to.contain.property('name');
//         expect(body).to.contain.property('email');
//         expect(body).to.contain.property('password');
//         done();
//       });
//       .catch((err) => done(err));
//       .timeout(10000);
//       .then(done, done);
//   });
// });

// describe('Testing', () => {
//   before((done) => {
//     conn
//       .connect()
//       .then(() => done())
//       .catch((err) => done(err));
//   });

//   after((done) => {
//     conn
//       .close()
//       .then(() => done())
//       .catch((err) => done(err));
//   });

//   it('it should POST a user', (done) => {
//     chai
//       .request(authRouter)
//       .post('/register')
//       .send({
//         name: 'JessNew',
//         email: 'jessnew@mail.com',
//         password: '123',
//       })
//       .then((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.book.should.have.property('name');
//         res.body.book.should.have.property('email');
//         res.body.book.should.have.property('password');
//         // done();
//       })
//       .catch((err) => done('error:', err));
//     done();
//     console.log(user);
//   });
// });

// describe('POST /register', () => {
//   before((done) => {});
// });

// describe('POST /register', () => {
//   it('should return status 200', async () => {
//     let res = await chai
//       .request(authRouter)
//       .post('/register')
//       .send({ name: 'JessNew', email: 'jessnew@mail.com', password: '123' });
//     expect(res.status).to.equal(200);
//   });
//   afterEach(async () => {
//     await User.deleteOne({ name: 'JessNew' });
//   });
// });

// describe('Testing', () => {
//     before((done) => {
//       connectDB(process.env.MONGO_URI)
//         .then(() => done())
//         .catch((err) => done(err));
//     });

//   describe('POST /register', () => {
//     it('it should POST a user', (done) => {
//       let user = {
//         name: 'JessNew',
//         email: 'jessnew@mail.com',
//         password: '123',
//       };
//       chai
//         .request(authRouter)
//         .post('/register')
//         .send(user)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.book.should.have.property('name');
//           res.body.book.should.have.property('email');
//           res.body.book.should.have.property('password');
//           done();
//         });
//       done();
//       console.log(user);
//     });
//   });
// });

// describe('POST /register', function () {
//   it('it should POST a user', function (done) {
//     let user = {
//       name: 'JessNew',
//       email: 'jessnew@mail.com',
//       password: '123',
//     };
//     chai
//       .request(authRouter)
//       .post('/register')
//       .send(user)
//       .end(function (err, res) {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.book.should.have.property('name');
//         res.body.book.should.have.property('email');
//         res.body.book.should.have.property('password');
//         // done();
//       });
//     done();
//     console.log(user);
//   });
// });

// describe('POST /register', () => {
//   it('it should POST a user', (done) => {
//     let user = {
//       name: 'JessNew',
//       email: 'jessnew@mail.com',
//       password: '123',
//     };
//     chai
//       .request(authRouter)
//       .post('/register')
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.book.should.have.property('name');
//         res.body.book.should.have.property('email');
//         res.body.book.should.have.property('password');
//         // done();
//       });
//     done();
//     console.log(user);
//   });
// });

// describe('/POST entry', () => {
//   it('it should POST an entry', (done) => {
//     chai
//       .request(entryRouter)
//       .post('/')
//       .send({ message: 'no title', title: 'new title' })
//       .end((err, res) => {
//         console.log(res.body);
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.book.should.have.property('message');
//         res.body.book.should.have.property('title');
//         done();
//       });
//     done();
//   });
// });

// describe('/GET entry', () => {
//   it('it should GET all the entries', (done) => {
//     chai
//       .request(entryRouter)
//       .get('/')
//       .end((err, res) => {
//         console.log(res.body);
//         res.should.have.status(200);
//         res.body.should.be.a('array');
//         res.body.length.should.be.eql(0);
//         done();
//       });
//     done();
//   });
// });

//   before((done) => {
//     connectDB(process.env.MONGO_URI)
//       .then(() => done())
//       .catch((err) => done(err));
//   });

//   it('it should POST a user', (done) => {
//     let user = {
//       name: 'JessNew',
//       email: 'jessnew@mail.com',
//       password: '123',
//     };
//     chai
//       .request(authRouter)
//       .post('/register')
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.book.should.have.property('name');
//         res.body.book.should.have.property('email');
//         res.body.book.should.have.property('password');
//         // done();
//       });
//     done();
//     console.log(user);
//   });
