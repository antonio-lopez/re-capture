const User = require('../models/User');
const assert = require('assert');

//extra
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = require('supertest');
// const chaiHttp = require('chai-http');
const should = chai.should();
const express = require('express');
const app = express();
const authRouter = require('../routes/auth');
const sinon = require('sinon');

// describe('Creating a user in MongoDB', () => {
//   it('Creates a New User', (done) => {
//     const newUser = new User({
//       name: 'JessNew',
//       email: 'jessnew@mail.com',
//       password: '1234567',
//     });
//     newUser
//       .save() // returns a promise after some time
//       .then(() => {
//         //if the newUser is saved in db and it is not new
//         assert(!newUser.isNew);
//       })
//       .then(() => done(), done);
//     // done();
//   });
// });

// describe('Creating a user in MongoDB', () => {
//   it('it should POST a user', (done) => {
//     // const newUser = {
//     //   name: 'JessNew',
//     //   email: 'jessnew@mail.com',
//     //   password: '1234567',
//     // };
//     const newUser = new User({
//       name: 'JessNew',
//       email: 'jessnew@mail.com',
//       password: '1234567',
//     });
//     chai
//       .request(authRouter)
//       .post('/register')
//       .send(newUser)
//       .end((res) => {
//         const body = res.body;
//         // res.should.have.status(200);
//         expect(body).to.contain.property('name');
//         // res.body.should.be.a('object');
//         // res.body.book.should.have.property('name');
//         // res.body.book.should.have.property('email');
//         // res.body.book.should.have.property('password');
//         // done();
//         // assert(!newUser.isNew);
//       });
//     // .catch((err) => done(err));
//     // .then(() => done(), done);
//     done();

//     // .then((err, res) => {
//     //   // res.should.have.status(200);
//     //   // res.body.should.be.a('object');
//     //   // res.body.book.should.have.property('name');
//     //   // res.body.book.should.have.property('email');
//     //   // res.body.book.should.have.property('password');
//     //   // done();
//     //   assert(!newUser.isNew);
//     // })
//     // .then(() => done(), done);
//   });
// });

// describe('Creating a user in MongoDB', () => {
//   it('it should POST a user', (done) => {
//     request(app)
//       .post('/api/v1/auth')
//       .send({ name: 'JessNew', email: 'jessnew@mail.com', password: '1234567' })
//       .end((err, res) => {
//         console.log(res.body);
//         console.log(app);
//         // const body = res.body;
//         res.should.have.status(201);
//         done();
//       });

//   });
// });

// describe('POST /', () => {
//   it('should return user when the all request body is valid', async () => {
//     app.use('/api/v1/auth', authRouter);
//     const res = await request(app).post('/register').send({
//       name: 'esteve',
//       email: 'esteve@gmail.com',
//       password: '1234567',
//     });
//     // console.log(res);
//     const data = res.body;
//     console.log(data);
//     expect(res.status).to.equal(200);
//     expect(data).to.have.property('name', 'esteve');
//     expect(data).to.have.property('email', 'esteve@gmail.com');

//     const user = await User.findOne({ email: 'esteve@gmail.com' });
//     expect(user.name).to.equal('esteve');
//     expect(user.email).to.equal('esteve@gmail.com');
//   });
// });

// describe('GET Users', ()=> {
//   it('should respond', async()=> {
//     const req = {};
//     const res = {};
//     const spy = (res.send = sinon.spy());

//     const res = await request(app).post('/register').send({
//     name: 'esteve',
//     email: 'esteve@gmail.com',
//     password: '1234567',
//   });

//     // req = res = {};
//     // spy = res.send = sinon.spy();

//     authRouter(req, res);
//     expect(spy.calledOnce).to.equal(true);
//   });
// });
