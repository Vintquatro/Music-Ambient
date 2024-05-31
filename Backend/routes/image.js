const express = require('express');
const router = express.Router();
const Image = require('../models/image');

router.get('/', async (req, res) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
