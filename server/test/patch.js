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
