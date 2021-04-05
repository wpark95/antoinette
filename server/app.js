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
  const sql = 'SELECT * FROM antoinette.posts ORDER BY view_num DESC LIMIT 6';
  const { sortBy } = req.params;

  if (sortBy === 'popular') {
    pool.query(sql)
      .then(({ rows }) => {
        res.status(200).send(rows);
        console.log(rows);
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
      console.log('POST ID = ', postId);
      return [postId, 'text', username, title, leftgame, rightgame, 0, 0];
    })
    .then((values) => {
      console.log('VALUES : ', values);
      const insertPostQuery = `
      INSERT INTO antoinette.posts (post_id,post_type,username,title,left_game,right_game,like_num,view_num) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
      `;
      pool.query(insertPostQuery, values)
        .then((result) => {
          res.status(201).send();
          console.log(result);
        })
        .catch((error) => {
          res.status(500).send();
          console.log(error);
        });
    });
});

module.exports = app;






















// // ========== Dependencies ==========
// const express = require('express');
// const path = require('path');
// const { pool } = require('../db/index.js');
// // require('dotenv').config();

// // ========== Express ==========
// const app = express();
// const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');
// const indexHTML = path.join(__dirname, '..', 'client', 'dist', 'index.html');

// app.use(express.static(DIST_DIR));
// app.use('/:mode', express.static(indexHTML));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ========== TEXT MODE ==========
// // === POSTS ID COUNTER ===

// app.get('/textmode/:sortBy', (req, res) => {
//   const sql = 'SELECT * FROM antoinette.posts ORDER BY view_num DESC LIMIT 6';
//   const { sortBy } = req.params;

//   if (sortBy === 'popular') {
//     pool.query(sql)
//       .then(({ rows }) => {
//         res.status(200).send(rows);
//         console.log(rows);
//       })
//       .catch((error) => {
//         res.status(500).send(error);
//       });
//   }
// });

// app.post('/textmode/create', (req, res) => {
//   let postId;
//   console.log('POST ID Numer 0 : ', postId); // undefiend
//   const {
//     username, title, leftgame, rightgame,
//   } = req.body;
//   const getPostIdQuery = `
//     SELECT id
//     FROM antoinette.posts
//     ORDER BY id DESC
//     LIMIT 1`;
//   pool.query(getPostIdQuery)
//     .then((result) => {
//       return result.rows[0].id;
//       console.log('Post ID Number 1 : ', postId); // 1004
//     })
//     .catch((error) => {
//       console.log('Error Getting Post ID Number : ', error);
//     });

//   console.log('Here is req.body : ', req.body);
//   console.log('Post ID Number 2 : ', postId); // undefiend

//   const insertPostQuery = `
//   INSERT INTO antoinette.posts (id,username,title,leftgame,rightgame,likenum,view_num)
//   VALUES ($1, $2, $3, $4, $5, $6, $7)
//   RETURNING *;
//   `;
//   const values = [postId, username, title, leftgame, rightgame, 0, 0];
//   console.log('These are values', values);

//   pool.query(insertPostQuery, values)
//     .then((result) => {
//       res.status(201).send();
//       console.log(result);
//     })
//     .catch((error) => {
//       res.status(500).send();
//       console.log(error);
//     });
// });

// module.exports = app;
