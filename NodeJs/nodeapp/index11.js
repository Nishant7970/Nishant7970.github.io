//environment variables
// This code uses the dotenv package to load environment variables from a .env file.5

import dotenv from 'dotenv';
dotenv.config();
const dbUser = encodeURIComponent(process.env.DBUSER);  // Encode the username to handle special characters used for security purposes
const dbPass = encodeURIComponent(process.env.DBPASS);
console.log(`Database User: ${dbUser}`);
console.log(`Database Password: ${dbPass}`);