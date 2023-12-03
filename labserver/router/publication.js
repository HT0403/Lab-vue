const express  = require('express');
//创建路由模块
const router = express.Router();

const publication_handler = require('../router_handler/publication.js');

router.get("/publications/:key_word",publication_handler.getAllPublication);
router.get("/publications/",publication_handler.getAllPublication);
module.exports = router;