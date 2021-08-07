//config.js
const dotenv = require('dotenv');
dotenv.config(); //Build the process.env object.
module.exports = {
    // databaseUserName: process.env.DB_USERNAME,
    databaseUserName:'root',
    databasePassword:'12345678',
    databaseName:'ESDE_Assignment_Part 2',
    // databasePassword: process.env.DB_PASSWORD,
    // databaseName: process.env.DB_DATABASE_NAME,

    cloudinaryUrl: process.env.CLOUDINARY_URL,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    JWTKey: process.env.JWTKEY,

    mailGunApiKey: process.env.MAILGUN_API_KEY,
    mailGunDomain:process.env.MAILGUN_DOMAIN
};
//Reference:
//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
