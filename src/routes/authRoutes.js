const express = require('express');
const router = express.Router();
const { loginController } = require('../controllers/authController');

// Rota de login
router.post('/', loginController);

module.exports = router;
