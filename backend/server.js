const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// TODO: Reemplaza la URL con la URL de tu frontend en Render
const whitelist = ['https://cdi-frontend.onrender.com'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/centro_inocente', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB')).catch(err => console.error(err));

// Middleware
app.use(express.json()); // Para parsear JSON
app.use(cors(corsOptions)); // Para permitir peticiones desde el frontend con CORS seguro

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/buyer', require('./routes/buyer'));
app.use('/api/supplier', require('./routes/supplier'));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
