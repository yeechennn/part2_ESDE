var validator = require('validator');

module.exports.validateEmail = function(req,res,next){     //anonymous middleware 
    if(req.body.email = !null){
        if(!validator.isEmail(req.body.email)){
            res.status(400).send({message: 'invalid email input.'});
            return; //always rmb this thing 
        }
    }
    next();
};