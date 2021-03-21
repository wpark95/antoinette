// ***** Dependencies *****
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// ***** Express *****
const app = express();
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');
const indexHTML = path.join(__dirname, '..', 'client', 'dist', 'index.html');

app.use(express.static(DIST_DIR));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ***** Redirect All Server Requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(indexHTML, function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })


module.exports = app;