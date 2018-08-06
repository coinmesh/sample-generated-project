const express = require('express');
const router = express.Router();
const walletService = require('@coinmesh/litecoind-adapter').walletService;

router.get('/', (req, res, next) => {
  walletService.getWalletInfo().then(result => {
    let data = result.result;
    console.log('-'.repeat(100))
    console.log(data)
    return res.json(data);
  });
});

module.exports = router;
