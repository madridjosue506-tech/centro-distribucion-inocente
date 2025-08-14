const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/centro_inocente', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB')).catch(err => console.error(err));

// Middleware
app.use(express.json()); // Para parsear JSON
app.use(cors()); // Para permitir peticiones desde el frontend

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/buyer', require('./routes/buyer'));
app.use('/api/supplier', require('./routes/supplier'));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));