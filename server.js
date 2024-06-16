'use strict';
require('dotenv').config();
const https = require('https');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const login = require('./login');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the 'cloud' directory
app.use(express.static(path.join(__dirname, 'cloud')));
// Serve static files from the 'Map CIVIL-PROTECTION' directory
app.use(express.static(path.join(__dirname, 'Map CIVIL-PROTECTION')));
// Serve static files from the 'Map SAMU-POLICE' directory
app.use(express.static(path.join(__dirname, 'Map SAMU-POLICE')));

// Route to serve the login page
app.get('/', function(req, res) {
  console.log('Get login');
  fs.createReadStream('./login.html').pipe(res);
});

// Route to handle login validation
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await login.validateLogin(username, password);

    if (user) {
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
});

// Route to serve the interfaces
app.get('/InterfaceCivilProtection.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'D:/Map CIVIL_PROTECTION/InterfaceCivilProtection.html'));
});

app.get('/InterfacePolice.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'D:/Map SAMU-POLICE/InterfacePolice.html'));
});

app.get('/InterfaceSAMU.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'D:/Map SAMU-POLICE/InterfaceSAMU.html'));
});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});