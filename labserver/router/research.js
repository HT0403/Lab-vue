const express  = require('express');
//创建路由模块
const router = express.Router();

const research_handler = require('../router_handler/research.js');

router.get("/research",research_handler.getAllResearch);

module.exports = router;