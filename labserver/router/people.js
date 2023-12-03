const express  = require('express');
//创建路由模块
const router = express.Router();

const people_handler = require('../router_handler/people.js');

router.get("/people",people_handler.getAllPeople);

module.exports = router;