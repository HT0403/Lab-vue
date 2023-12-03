const express =require('express')
const app = express()
const port = 5000
// 配置解析表单数据的中间件  内置中间件，只能解析application/x-www-form-urlencoded格式的数据
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  // 定义一个输出的函数
  res.output = function (err, status = 1, data) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
      data,
    });
  };
  next();
});
// 导入并使用路由模块
const peopleRouter = require("./router/people.js");
app.use(peopleRouter);
const researchRouter = require("./router/research.js");
app.use(researchRouter);
const publicationRouter = require("./router/publication.js");
app.use(publicationRouter);
app.listen(port, () => console.log(`Server running at http://127.0.0.1:${port}!`))