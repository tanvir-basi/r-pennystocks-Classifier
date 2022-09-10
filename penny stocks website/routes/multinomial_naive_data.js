const express = require('express');
const router = express.Router();
const multinomial_naive_data = require('../services/multinomial_naive_data');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await multinomial_naive_data.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting data`, err.message);
    next(err);
  }
});

module.exports = router;