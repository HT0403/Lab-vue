const db = require('../Db/index.js');
//获取Faculty信息
exports.getAllPeople = (req, res) => {
  //定义查询结果
  const result = {
    faculty:[],
    mpd:[],
    alumn:[]
  };
  // db.connect();
  // 定义查询的sql语句
  const faculty_sql = "select * from people_faculty;";
  const mpd_sql = "select * from people_mpdstudent;";
  const alumn_sql = "select * from people_alumnistudent;";
  db.query(faculty_sql, (err, faculty_results) => {
    if (err) console.log(err);
    result.faculty = JSON.parse(JSON.stringify(faculty_results));
  });
  db.query(mpd_sql, (err, mpd_results) => {
    if (err) console.log(err);
    result.mpd = JSON.parse(JSON.stringify(mpd_results));
  });
  db.query(alumn_sql, (err, alumn_results) => {
    if (err) console.log(err);
    result.alumn = JSON.parse(JSON.stringify(alumn_results));
    console.log(result);
    res.output("查询成功", 0, result);
    // db.end();
  });
};

