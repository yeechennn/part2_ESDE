const auth = require('../services/authService');

module.exports.checkAdminFn = (req, res, next) => {
    console.log('http header - admin ', req.headers['user']);
    req.body.userId = req.headers['user'];
    req.body.role_name = req.headers['role_name'];

    
    if (req.body.userId != null && req.body.role_name == 'admin') {
        next()
        return;
    } else {
        res.status(403).json({ message: 'Unauthorized access' });
        return;
    }

} //End of checkForAdmin