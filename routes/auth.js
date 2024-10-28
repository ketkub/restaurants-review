const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user && bcrypt.compareSync(password, user.password)) {
    return res.json({ id: user.id });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
