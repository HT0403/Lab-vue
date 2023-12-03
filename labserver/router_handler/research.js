const db = require('../Db/index.js');
exports.getAllResearch = (req, res) => {
  //定义查询结果
  const result = {
    current:[],
    past:[],
  };
  // db.connect();
  // 定义查询的sql语句
  const current_sql = "select * from research_current;";
  const past_sql = "select * from research_past;";
  db.query(current_sql, (err, current_results) => {
    if (err) console.log(err);
    result.current = JSON.parse(JSON.stringify(current_results));
  });
  db.query(past_sql, (err, past_results) => {
    if (err) console.log(err);
    result.past = JSON.parse(JSON.stringify(past_results));
    console.log(result);
    res.output("查询成功", 0, result);
    // db.end();
  });
};

