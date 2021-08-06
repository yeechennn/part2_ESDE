// Import controllers 
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

//Import middlewares
const checkForAdmin = require('../middlewares/checkForAdmin');

const express = require('express');
let router = express.Router();

router.put('/',checkForAdmin.checkAdminFn,userController.processUpdateOneUser);
router.get('/process-search-user/:pagenumber/:search?', checkForAdmin.checkAdminFn, userController.processGetUserData);
router.get('/process-search-user-design/:pagenumber/:search?',checkForAdmin.checkAdminFn,userController.processGetSubmissionsbyEmail);

module.exports = router