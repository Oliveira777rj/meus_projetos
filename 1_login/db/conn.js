const mysql = require('mysql');

const conn = mysql.createConnection({

  host:'localhost',
  user:'root',
  password:'&&&',
  database:'login2'
});

module.exports = conn;