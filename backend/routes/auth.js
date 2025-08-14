const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// @route   POST api/auth/register
// @desc    Registrar un nuevo usuario (comprador o proveedor)
// @access  Public
router.post('/register', register);

// @route   POST api/auth/login
// @desc    Autenticar un usuario y obtener un token
// @access  Public
router.post('/login', login);

module.exports = router;