const { Client, Pool } = require('pg');
require('dotenv').config();

const devDBUser = process.env.DB_DEV_USER;
const devDBPassword = process.env.DB_DEV_PW;
const devDBHost = process.env.DB_DEV_HOST;
const devDBDatabase = process.env.DB_DEV_DB;

const pool = new Pool({
  user: devDBUser,
  password: devDBPassword,
  host: devDBHost,
  database: devDBDatabase,
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
pool.on('connect', () => {
  // pool.query('SET search_path TO sdc;');
  console.log(`Connected to PostgreSQL. Host: ${devDBHost}`);
});

module.exports.pool = pool;
