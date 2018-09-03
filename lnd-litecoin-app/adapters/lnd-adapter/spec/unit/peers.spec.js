const { addPeer, getPeers, removePeer } = require('ln-service');

describe('Peers', () => {
  describe('addPeer()', () => {
    it('adds a new peer to the node', (done) => {
      let fakePeer = '';

      addPeer(fakePeer).then(result => {
        expect(result.result[0].address).not.toBe(null);
        done();
      });
    });
  });
});
