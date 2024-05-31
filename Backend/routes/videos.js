const express = require('express');
const router = express.Router();
const Video = require('../models/video');

router.get('/', async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
