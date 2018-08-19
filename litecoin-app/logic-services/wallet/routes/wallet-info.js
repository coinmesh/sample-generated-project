const express = require('express');
const router = express.Router();
const walletService = require('@coinmesh/litecoind-adapter').walletService;

router.get('/', (req, res, next) => {
  walletService.getWalletInfo().then(result => {
    let data = result.result;
    return res.json(data);
  });
});

module.exports = router;
