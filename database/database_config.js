const Pool = require('pg').Pool
const pool = new Pool({
  user: 'khoidao',
  host: 'localhost',
  database: 'mvp',
  port: 5432
});