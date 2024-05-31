const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middlewares
app.use(bodyParser.json());
app.use(cors());

// Importar rotas
const genreRoutes = require('./routes/genres');
const imageRoutes = require('./routes/image');
const songRoutes = require('./routes/songs');
const videoRoutes = require('./routes/videos');

// Usar rotas
app.use('/api/genres', genreRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/videos', videoRoutes);

// Iniciar o servidor
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  try {
    await sequelize.authenticate();
    console.log('Database connection successfully established.');
    
    await sequelize.sync();
    console.log('Synchronized database.');
    
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
});
