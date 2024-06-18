'use strict';
require('dotenv').config();
const https = require('https');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const login = require('./login');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Route to serve the login page
app.get('/', function(req, res) {
  console.log('Get login');
  fs.createReadStream('./login.html').pipe(res);
});

// Middleware to parse JSON
app.use(bodyParser.json());

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
  try {

    if (result) {
      const { edge } = user; // Get the 'edge' value from the user object

      if (edge === 'C1') {
        res.redirect('/InterfaceCivilProtection.html');
      } else if (edge === 'P2') {
        res.redirect('/InterfacePolice.html');
      } else if (edge === 'S2') {
        res.redirect('/InterfaceSAMU.html');
      } else {
        res.status(400).send('Invalid edge value');
      }
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    console.error('Error during login validation:', err);
    res.status(500).send('Server error');
  }

// Route to serve the interfaces
app.get('/InterfaceCivilProtection.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'https://k12854b.github.io/edge1doc.gethub.io/InterfaceCivilProtection.html#14/36.5102/2.8834'));
});

app.get('/InterfacePolice.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'https://k12854b.github.io/edge2doc.gethub.io/InterfacePolice.html#15/36.4995/2.8632'));
});

app.get('/InterfaceSAMU.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'https://k12854b.github.io/edge2doc.gethub.io/InterfaceSAMU#15/36.4995/2.8632'));
});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});