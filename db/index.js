// const { Client } = require('pg');
// require('dotenv').config();

// const host = process.env.DB_HOST;
// const password = process.env.DB_PW;

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   password,
//   host,
//   database: 'antoinette',
// });

// // the pool will emit an error on behalf of any idle clients
// // it contains if a backend error or network partition happens
// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });
// pool.on('connect', () => {
//   // pool.query('SET search_path TO sdc;');
//   console.log(`Connected to PostgreSQL. Host: ${host}`);
// });

// module.exports.pool = pool;
