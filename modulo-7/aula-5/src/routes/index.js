// src/routes/index.js
const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/auth")


router.get('/public', (req, res) => {
  res.json({ message: 'This is a public endpoint' });
});

router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected endpoint' });
});

module.exports = router;