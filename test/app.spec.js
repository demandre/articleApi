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
    const payload = {"name":"cyril","age":'30',"sexe":"male"};

    chai.request(app)
      .post('/user/create')
      .send(payload)
      .end((err, res) => {
          res.should.have.status(200);

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
          this.articleCreated = JSON.parse(res.text)

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

  it('GET /show/:id should get an article result with id created above', (done) => {
    chai.request(app)
      .get('/article/show/' + this.articleCreated._id)
      .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql('[{"comment":[],"_id":"' + this.articleCreated._id + '","title":"Great article","content":"This is an article","cover_img_url":"test url","date":"' + this.articleCreated.date + '"}]')

          done();
      });
  });

  it('POST /update/:id should update article with id created above', (done) => {
    const payload = {"title":"Great article updated","content":'This is an article updated',"cover_img_url":"test url updated"};

    chai.request(app)
      .post('/article/update/' + this.articleCreated._id)
      .send(payload)
      .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql('{"comment":[],"_id":"' + this.articleCreated._id + '","title":"Great article updated","content":"This is an article updated","cover_img_url":"test url updated","date":"' + this.articleCreated.date + '"}')
          
          done();
      });
  });

  it('GET /delete/:id should delete an article with id created above', (done) => {
    chai.request(app)
      .get('/article/delete/' + this.articleCreated._id)
      .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql('{"n":1,"ok":1,"deletedCount":1}')

          done();
      });
  });
});