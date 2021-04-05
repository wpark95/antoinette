// ========== Dependencies ==========
const express = require('express');
const path = require('path');
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

app.get('/textmode/:sortBy', (req, res) => {
  const { sortBy } = req.params;
  const getTopSixMostViewsQuery = 'SELECT * FROM antoinette.posts ORDER BY view_num DESC LIMIT 6';
  const getTopSixMostLikesQuery = 'SELECT * FROM antoinette.posts ORDER BY like_num DESC LIMIT 6';
  const getTopSixMostRecentQuery = 'SELECT * FROM antoinette.posts ORDER BY post_id DESC LIMIT 6';

  if (sortBy === 'popular') {
    pool.query(getTopSixMostViewsQuery)
      .then(({ rows }) => {
        res.status(200).send(rows);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
  if (sortBy === 'mostLike') {
    pool.query(getTopSixMostLikesQuery)
      .then(({ rows }) => {
        res.status(200).send(rows);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
  if (sortBy === 'recent') {
    pool.query(getTopSixMostRecentQuery)
      .then(({ rows }) => {
        res.status(200).send(rows);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
});

app.post('/textmode/create', (req, res) => {
  const {
    username, title, leftgame, rightgame,
  } = req.body;
  const getPostIdQuery = `
    SELECT post_id
    FROM antoinette.posts 
    ORDER BY post_id DESC 
    LIMIT 1`;

  pool.query(getPostIdQuery)
    .then((result) => {
      const postId = result.rows[0].post_id + 1;
      return [postId, 'text', username, title, leftgame, rightgame, 0, 0];
    })
    .then((values) => {
      const insertPostQuery = `
      INSERT INTO antoinette.posts (post_id,post_type,username,title,left_game,right_game,like_num,view_num) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
      `;
      pool.query(insertPostQuery, values)
        .then((result) => {
          res.status(201).send(result);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    });
});

module.exports = app;
