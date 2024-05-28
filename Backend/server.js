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

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rota de teste
app.get('/api/test', async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para listar todos os gêneros
app.get('/api/genres', async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar o servidor e sincronizar o banco de dados
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    
    await sequelize.sync(); // Use { force: true } apenas em desenvolvimento, pois ele recria as tabelas
    console.log('Banco de dados sincronizado.');
    
  } catch (error) {
    console.error('Erro ao conectar a base de dados:', error);
  }
});
