// Dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const Server = require('../app/server.js');

// Core
const server = new Server();
const app = server.app;
const should = chai.should();

chai.use(chaiHttp);

/**
 * GET /user
 */
describe('GET /user', () => {
  it('POST /create should create an user', (done) => {
    //const result = '{"name":"cyril","age":"30","sexe":"male"}';
    const payload = {"name":"cyril","age":'30',"sexe":"male"};

    chai.request(app)
      .post('/user/create')
      .send(payload)
      .end((err, res) => {
          res.should.have.status(200);
          //res.text.should.be.eql(result); Can't verify as object_id is random

          done();
      });
  });

  it('POST /create should check the payload body is false', (done) => {
    const result = '{"errors":[{"parameter":"nme","value":"tutu","message":"Unexpected value."},{"parameter":"ag","value":40,"message":"Unexpected value."},{"parameter":"gende","value":"male","message":"Unexpected value."},{"parameter":"name","message":"Required value."}]}';
    const payload = {'nme': 'tutu','ag': 40,'gende': 'male'};

    chai.request(app)
      .post('/user/create')
      .send(payload)
      .end((err, res) => {
          res.should.have.status(400);
          res.text.should.be.eql(result);

          done();
      });
  });
});