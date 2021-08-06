// Import controllers 
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');    

const express = require('express');
let router = express.Router();

router.post('/login',authController.processLogin);
router.get('/:recordId', userController.processGetOneUserData);
router.get('/design/:fileId',userController.processGetOneDesignData);

module.exports = router
