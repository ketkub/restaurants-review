const express = require('express');
const { Review } = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, restaurantId, rating, comment } = req.body;
  const review = await Review.create({ userId, restaurantId, rating, comment });
  res.status(201).json(review);
});

module.exports = router;
