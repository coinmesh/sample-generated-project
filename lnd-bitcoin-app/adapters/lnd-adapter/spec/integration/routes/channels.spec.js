const app = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');

describe('Channels', () => {
  describe('/v0/channels/', () => {
    it('responds', (done) => {
      let url = `/v0/channels/`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(Array.isArray(res.body.channels)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });

  // TODO: Add a channel first
  xdescribe('/v0/channels/', () => {
    it('responds', (done) => {
      const fakeId = '123';
      let url = `/v0/channels/${fakeId}`;

      request(app)
        .delete(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            console.log('-'.repeat(100))
            console.log(err)
            // console.log(res)
            // expect(Array.isArray(res.body.channels)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });

  // TODO: Add a channel first
  fdescribe('/v0/channels/', () => {
    it('opens a new channel', (done) => {
      const fakeId = '123';
      let url = `/v0/channels/`;

      request(app)
        .post(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            console.log('-'.repeat(100))
            console.log(err)
            // console.log(res)
            // expect(Array.isArray(res.body.channels)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });
});
