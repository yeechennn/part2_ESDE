config = require('../config/config');
const pool = require('../config/database')
// module.exports.authenticate = (email, callback) => {

//         pool.getConnection((err, connection) => {
//             if (err) {
//                 if (err) throw err;

//             } else {
//                 try {
//                     if (/^[a-zA-Z0-9\s@._-]*$/.test(email))
//                 {
//                   return callback('You have entered an invalid email address!',null )
//                 }    
                    
//                     connection.query(`SELECT user.user_id, fullname, email, user_password, role_name, user.role_id  
//                    FROM user INNER JOIN role ON user.role_id=role.role_id AND email=?`,[email], (err, rows) => {
//                         if (err) {
//                             if (err) return callback(err, null);

//                         } else {
//                             if (rows.length == 1) {
//                                 console.log(rows);
//                                 return callback(null, rows);

//                             } else {

//                                 return callback('Login has failed', null);
//                             }
//                         }
//                         connection.release();

//                     });
//                 } catch (error) {
//                     return callback(error, null);;
//                 }
//             }
//         }); //End of getConnection

//     } //End of authenticate






module.exports.authenticate = (email) => {

    return new Promise((resolve, reject) => {

        pool.getConnection((err, connection) => {

            if (err) {

                console.log(err)

                reject(err);



            } else {

                try {

                    connection.query(`SELECT user.user_id, fullname, email, user_password, role_name, user.role_id  

                   FROM user INNER JOIN role ON user.role_id=role.role_id AND email=?`, [email], (err, rows) => {

                        if (err) {

                           reject(err);



                        } else {

                            if (rows.length == 1) {

                                console.log(rows);

                                resolve(rows);



                            } else {

                                reject({'message': 'Duplicate entries!'});

                            }

                        }

                        connection.release();



                    });

                } catch (error) {

                   reject(err);

                }

            }

        }); //End of getConnection

    });

} //End of authenticate 