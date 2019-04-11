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
 * GET /article
 */
describe('GET /article', () => {
  it('POST /create should create an article', (done) => {
    const payload = {"title":"Great article","content":'This is an article',"cover_img_url":"test url"};

    chai.request(app)
      .post('/article/create')
      .send(payload)
      .end((err, res) => {
          res.should.have.status(200);
          //res.text.should.be.eql(result); Can't verify as object_id is random

          done();
      });
  });

  it('POST /create should check the payload body is false', (done) => {
    const result = '{"errors":[{"parameter":"nme","value":"tutu","message":"Unexpected value."},{"parameter":"ag","value":40,"message":"Unexpected value."},{"parameter":"gende","value":"male","message":"Unexpected value."},{"parameter":"title","message":"Required value."},{"parameter":"content","message":"Required value."}]}';
    const payload = {'nme': 'tutu','ag': 40,'gende': 'male'};

    chai.request(app)
      .post('/article/create')
      .send(payload)
      .end((err, res) => {
          res.should.have.status(400);
          res.text.should.be.eql(result);

          done();
      });
  });

  it('get /show should return an article', (done) => {
    chai.request(app)
      .post('/article/create')
      .send(payload)
      .end((err, res) => {
          res.should.have.status(200);
          //res.text.should.be.eql(result); Can't verify as object_id is random

          done();
      });
  });

  it('GET /show:id should get an user result with id 5caf315c3dc37a1b03a9d0c0', (done) => {
    chai.request(app)
      .get('/article/show/5caf315c3dc37a1b03a9d0c0')
      .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql('{ "_id" : "5caf315c3dc37a1b03a9d0c0", "title" : "Great article", "content" : "This is an article", "cover_img_url" : "test url" }');

          done();
      });
  });
});