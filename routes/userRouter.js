const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Dados do usuarios seram enviados por POSTs (Cadastro / Login)

router.post('/register' , userController.register)
router.post('/login' , userController.login)

module.exports = router;