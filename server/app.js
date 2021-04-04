// ***** Dependencies *****
const express = require('express');
const path = require('path');
const { pool } = require('../db/index.js');
// require('dotenv').config();

// ***** Express *****
const app = express();
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');
const indexHTML = path.join(__dirname, '..', 'client', 'dist', 'index.html');

app.use(express.static(DIST_DIR));
app.use('/*', express.static(indexHTML));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/textmode/:sortBy', (req, res) => {
  const sql = 'SELECT * FROM antoinette.posts ORDER BY viewNum LIMIT 6';
  const { sortBy } = req.params;
  console.log('SORT BYYYYYYYYYYYYYYYYYYYYYYYY', sortBy);

  if (sortBy === 'popular') {
    pool.query(sql)
      .then((result) => {
        res.status(200).send(result.rows);
        console.log(result.rows);
      })
      .catch((error) => {
        res.status(500).send();
        console.log(error.stack);
      });
  }
});

app.post('/test/textinput', (req, res) => {
  console.log(req.body);
  res.status(201).send();
});

module.exports = app;
