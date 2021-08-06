// // To do: seperate routes for user and admin 
// // authController object will eventually have x number of 
// // Import controlers
// const authController = require('./controllers/authController');
// const userController = require('./controllers/userController');
// const checkUserFn = require('./middlewares/checkUserFn');
// const checkUserFnSolution = require('./middlewares/checkUserFnSolution');
// //const validateFn = require('./middlewares/validateFn');


// // Match URL's with controllers
// module.exports.appRoute = router => {
//     router.post('/api/user/login', authController.processLogin); //for login of user and use processLogin function 
//     router.post('/api/user/register', authController.processRegister); //for register of user and use processRegister function
//     router.post('/api/user/process-submission', checkUserFn.getClientUserId, userController.processDesignSubmission); // for checking of user if its exist in the db
//     router.put('/api/user/', userController.processUpdateOneUser);
//     router.put('/api/user/design/', userController.processUpdateOneDesign);
//     router.post('/api/user/processInvitation/',checkUserFn.getClientUserId, userController.processSendInvitation);

//     router.get('/api/user/process-search-design/:pagenumber/:search?', checkUserFnSolution.checkForValidUserRoleUser, userController.processGetSubmissionData);
//     router.get('/api/user/process-search-user/:pagenumber/:search?', checkUserFn.getClientUserId, userController.processGetUserData);
//     router.get('/api/user/process-search-user-design/:pagenumber/:search?', userController.processGetSubmissionsbyEmail);
//     router.get('/api/user/:recordId', userController.processGetOneUserData);
//     router.get('/api/user/design/:fileId', userController.processGetOneDesignData);

// };

// //getClientUserId requires validation on the search parameter, dont allow user to enter script tag 
// //apply middleware at apporiate routes not using app