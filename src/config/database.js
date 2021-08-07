const mysql = require('mysql');
const config = require('./config');
//To find out more on createPool:
//https://www.npmjs.com/package/mysql#pooling-connections

const pool = mysql.createPool({
        connectionLimit: 100,
        host: 'esde-part2-db.cnkywdbvye3n.us-east-2.rds.amazonaws.com',
        user: 'root',
        password: '12345678',
        database: 'ESDE_Assignment_Part 2',
        multipleStatements: true
    });

 module.exports=pool;

