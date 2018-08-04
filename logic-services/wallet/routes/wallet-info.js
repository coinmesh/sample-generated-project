const express = require('express');
const router = express.Router();
const walletService = require('@coinmesh/litecoind-adapter').walletService;

router.get('/', (req, res, next) => {
  walletService.getWalletInfo().then(result => {
    console.log('-'.repeat(100))
    console.log(result)
    return res.json(result);
  });
});

module.exports = router;
