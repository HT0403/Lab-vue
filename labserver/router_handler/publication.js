const db = require('../Db/index.js');
exports.getAllPublication = (req, res) => {
  const key_word = req.params.key_word;
  console.log(key_word);
  var sql = '';
  if(key_word == undefined){
     sql= "select * from publication p where concat(p.title,p.date,p.author) like '%%';";
  }else{
    sql = "select * from publication p where concat(p.title,p.date,p.author) like '%"+key_word+"%';";
  }
  
  db.query(sql, (err, results) => {
    if (err) console.log(err);
    result = JSON.parse(JSON.stringify(results));
    console.log(result);
    res.output("查询成功", 0, result);
  });
};

