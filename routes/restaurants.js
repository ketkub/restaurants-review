const express = require('express');
const { Restaurant } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});

router.post('/', async (req, res) => {
  const { name, location, imageUrl, description } = req.body;
  const restaurant = await Restaurant.create({ name, location, imageUrl, description });
  res.status(201).json(restaurant);
});

router.get('/:id', async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);
  res.json(restaurant);
});

module.exports = router;
