const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const Genre = require('./models/genre');
const Image = require('./models/image');
const Song = require('./models/song');
const Video = require('./models/video');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/genres', async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/image', async (req, res) => {
  try {
    const image = await Image.findAll();
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/video', async (req, res) => {
  try {
    const video = await Video.findAll();
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/song', async (req, res) => {
  try {
    const song = await Song.findAll();
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/song/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const song = await Song.findByPk(id);
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  try {
    await sequelize.authenticate();
    console.log('Database connection successfully established.');
    
    await sequelize.sync();
    console.log('Synchronised database.');
    
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
});
