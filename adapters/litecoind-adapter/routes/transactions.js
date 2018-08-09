const express = require('express');
const router = express.Router();
const transactionsService = require('../services/transactions');

router.get('/', (req, res, next) => {
  transactionsService.getTransactions().then(result => {
    res.json(result);
  });
});

router.post('/', (req, res, next) => {
  let targetAddress = req.body.to_address;
  let tokens = req.body.amount;

  transactionsService.sendToAddress(targetAddress, tokens).then(result => {
    res.json(result);
  });
});

module.exports = router;
