'use strict';
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Function to validate user login and fetch the edge field
async function validateLogin(username, password) {
  try {
    const query = 'SELECT * FROM login WHERE username = $1 AND password = $2';
    const result = await pool.query(query, [username, password]);

    if (result.rows.length > 0) {
      return result.rows[0]; // Return the first matching user
    } else {
      return null;
    }
  } catch (err) {
    console.error('Error validating login:', err);
    throw err;
  }
}
module.exports = { validateLogin };