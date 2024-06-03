const express = require('express');
const Image = require('../models/image');
const router = express.Router();

// Get all images
router.get('/', async (req, res) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get images by genre ID
router.get('/genre/:genreId', async (req, res) => {
  try {
    const images = await Image.findAll({ where: { genre_id: req.params.genreId } });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
