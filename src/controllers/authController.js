const user = require('../services/userService');
const auth = require('../services/authService');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const jwt = require('jsonwebtoken');





// exports.processLogin =  (req, res, next) => { 

//     let email = req.body.email;
//     let password = req.body.password;
//     try {
//         auth.authenticate(email, async function(error, results) {
//             if (error) {
//                 let message = 'Credentials are not valid.';
//                 //return res.status(500).json({ message: message });
//                 //If the following statement replaces the above statement
//                 //to return a JSON response to the client, the SQLMap or
//                 //any attacker (who relies on the error) will be very happy
//                 //because they relies a lot on SQL error for designing how to do 
//                 //attack and anticipate how much "rewards" after the effort.
//                 //Rewards such as sabotage (seriously damage the data in database), 
//                 //data theft (grab and sell). 
//                 return res.status(500).json({ message: error }); //dangerous to show , never expose SQL error in client side in FYP 
//                 // use this instead , ({message: 'system error'})
//                 // above code will only show 'system error', instead of expose SQL error in client side 

//             } else {
//                 if (results.length == 1) {
//                     if ((password == null) || (results[0] == null)) {
//                         return res.status(500).json({ message: 'login failed' });
//                     }
                    
              
                    
//                     if (bcrypt.compareSync(password, results[0].user_password) == true) {

//                         let data = {
//                             user_id: results[0].user_id,
//                             role_name: results[0].role_name,
//                             token: jwt.sign({ id: results[0].user_id 
//                             }, config.JWTKey, {
//                                 expiresIn: 86400 //Expires in 24 hrs
//                             })
//                         }; //End of data variable setup

//                         return res.status(200).json(data);

                
//                         }
                    
                    
//                     else {
//                         // return res.status(500).json({ message: 'Login has failed.' });
//                         return res.status(500).json({ message: error });
//                     } //End of passowrd comparison with the retrieved decoded password.
//                 } //End of checking if there are returned SQL results

//             }

//         })

//     } catch (error) {
//         return res.status(500).json({ message: error });
//     } //end of try



// };

exports.processRegister = (req, res, next) => {
    console.log('processRegister running.');
    let fullName = req.body.fullName;
    let email = req.body.email;
    let password = req.body.password;


    bcrypt.hash(password, 10, async(err, hash) => {
        if (err) {
            console.log('Error on hashing password');
            return res.status(500).json({ statusMessage: 'Unable to complete registration' });
        } else {
            
                results = user.createUser(fullName, email, hash, function(results, error){
                  if (results!=null){
                    console.log(results);
                    return res.status(200).json({ statusMessage: 'Completed registration.' });
                  }
                  if (error) {
                    console.log('processRegister method : callback error block section is running.');
                    console.log(error, '==================================================================');
                    return res.status(500).json({ statusMessage: 'Unable to complete registration' });
                }
                });//End of anonymous callback function
     
          
        }
    });


}; // End of processRegister


exports.processLogin = async(req, res, next) => {

        let email = req.body.email;
    
        let password = req.body.password;
    
        try {
    
            let results = await auth.authenticate(email)
    
    
    
                if (results) {
    
                    if (results.length == 1) {
    
                        if ((password == null) || (results[0] == null)) {
    
                          res.status(500).send({
    
                              "code": 500,
    
                              "success": false,
    
                              "message": "Login failed ",
    
                              "data": [ ]
    
                          })
    
                        }
    
                        if (bcrypt.compareSync(password, results[0].user_password) == true) {
    
    
    
                            let data = {
    
                                user_id: results[0].user_id,
    
                                role_name: results[0].role_name,
    
                                token: jwt.sign({ id: results[0].user_id}, config.JWTKey, {
    
                                    expiresIn: 86400 //Expires in 24 hrs
    
                                })
    
                            }; //End of data variable setup
    
                            return res.status(200).send(data)
    
                        } else {
    
                            // return res.status(500).json({ message: 'Login has failed.' });
    
                            return res.status(500).send({
    
                                "code": 500,
    
                                "success": false,
    
                                "message": "Login has failed ",
    
                                "data": [ ]
    
                            })
    
    
    
    
                        } //End of passowrd comparison with the retrieved decoded password.
    
                    } //End of checking if there are returned SQL results
    
    
    
                } else {
    
                    
    
                    // let message = 'Credentials are not valid.';     
    
                    //return res.status(500).json({ message: message });
    
                    //If the following statement replaces the above statement
    
                    //to return a JSON response to the client, the SQLMap or
    
                    //any attacker (who relies on the error) will be very happy
    
                    //because they relies a lot on SQL error for designing how to do 
    
                    //attack and anticipate how much "rewards" after the effort.
    
                    //Rewards such as sabotage (seriously damage the data in database), 
    
                    //data theft (grab and sell). 
    
                    return res.status(401).send( {
    
                        "code": 401,
    
                        "success": false,
    
                        "message": "Credentials are not valid",
    
                        "data": [ ]
    
                    })
    
                    
    
                }
    
        } catch (error) {
            console.log(error)
            return  res.status(500).send( { "message": error
    
            })
    
        } //end of try
    
    };