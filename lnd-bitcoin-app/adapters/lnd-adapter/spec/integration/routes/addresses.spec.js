const app = require('../../../app')
const request = require('supertest');

describe('Addresses', () => {
  describe('/v0/addresses/', () => {
    it('responds', (done) => {
      let url = `/v0/addresses`;
      spyOn(app.lnd, 'newAddress').and.callFake((lnd, callback) => {
        callback(null, {address: 'test'});
      });

      request(app)
        .post(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(app.lnd.newAddress).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
