const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'gymPb',
  password: process.env.DB_PASSWORD || '123456789',
  port: process.env.DB_PORT || 5432,
});

const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = { query };
