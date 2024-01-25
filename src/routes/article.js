const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
//const allArticles = require('../controller/article'); 
const aArticle = require('../controller/aArticle'); 
// 3.
// router.route('/article')
//     .get(allArticles); 

router.route('/article/:id')
    .get(aArticle);

//router.get('/insert', articleController.newArticle);
// 4. 
module.exports = router; // export to use in server.js
