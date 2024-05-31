const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');

router.get('/', async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
