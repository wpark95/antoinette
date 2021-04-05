// ========== Dependencies ==========
const express = require('express');
const path = require('path');
const { addPadding } = require('../db/test_gen/dataHelperFunctions');
const { pool } = require('../db/index.js');
// require('dotenv').config();

// ========== Express ==========
const app = express();
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');
const indexHTML = path.join(__dirname, '..', 'client', 'dist', 'index.html');

app.use(express.static(DIST_DIR));
app.use('/:mode', express.static(indexHTML));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========== TEXT MODE ==========
// === POSTS ID COUNTER ===
let idCounter = '';
app.get('/textmode/', (req, res) => {
  const sql = `
    SELECT id
    FROM antoinette.posts 
    ORDER BY id DESC 
    LIMIT 1`;

  pool.query(sql)
    .then((result) => {
      const { rows } = result;
      console.log('result :', rows);
      console.log('result type :', typeof rows);
    })
    .catch((error) => {
      res.status(500).send();
      console.log(error.stack);
    });
});

app.get('/textmode/:sortBy', (req, res) => {
  const sql = 'SELECT * FROM antoinette.posts ORDER BY viewNum DESC LIMIT 6';
  const { sortBy } = req.params;

  if (sortBy === 'popular') {
    pool.query(sql)
      .then((result) => {
        res.status(200).send(result.rows);
        console.log(result.rows);
      })
      .catch((error) => {
        res.status(500).send();
      });
  }
});

app.post('/textmode/create', (req, res) => {
  console.log(req.body);
  const {
    username, title, leftgame, rightgame,
  } = req.body;

  idCounter += 1;
  const sql = `
  INSERT INTO antoinette.posts (id,paddedid,username,title,leftgame,rightgame,likenum,viewnum) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *;
  `;
  const values = [idCounter, addPadding(idCounter), username, title, leftgame, rightgame, 0, 0];

  pool.query(sql, values)

    .then((result) => {
      res.status(201).send();
      console.log(result);
    })
    .catch((error) => {
      res.status(500).send();
      console.log(error);
    });
});

module.exports = app;
