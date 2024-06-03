const express = require('express');
const Song = require('../models/song');
const router = express.Router();

// Get all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.findAll();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get songs by genre ID
router.get('/genre/:genreId', async (req, res) => {
  try {
    const songs = await Song.findAll({ where: { genre_id: req.params.genreId } });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


