// Desc: 数据库连接
const config = require('../config.json');
const mysql = require('mysql');
const db = mysql.createConnection({
  host:"localhost",
  user:config.mysql.username,
  password:config.mysql.password,
  database:config.mysql.database
});

// 检测数据库是否连接成功
// db.query("select 1", (err, results) => {
//   if (err) return console.log(err);
//   console.log(results);
// });

module.exports = db;