// Import controllers 
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

//Import middlewares
const checkUserFn = require('../middlewares/checkUserFn');
const checkUserFnSolution = require('../middlewares/checkUserFnSolution');

const express = require('express');
let router = express.Router();

router.put('/',userController.processUpdateOneUser);
router.get('/process-search-design/:pagenumber/:search?',checkUserFn.getClientUserId, userController.processGetSubmissionData);

router.get('/process-search-user-design/:pagenumber/:search?',userController.processGetSubmissionsbyEmail);

// router.post('/register', authController.processRegister);

// router.get('/process-search-user/:pagenumber/:search?', checkUserFn.getClientUserId, userController.processGetUserData);

// router.post('/process-submission', checkUserFn.getClientUserId, userController.processDesignSubmission);

// router.put('/design/', userController.processUpdateOneDesign);

// router.post('/processInvitation/', checkUserFn.getClientUserId, userController.processSendInvitation);

module.exports = router