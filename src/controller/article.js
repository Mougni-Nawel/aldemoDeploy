// const fs = require('fs');

// const app = require('../../server');

const articleController ={};
const articles = require('../db/sequelize');

const allArticles = function (req, res) {
        console.log(articles);
        articles.findAll().then(article => {
            res.json(article)
        });
    };
    // res.render({articles: pool.execute});


module.exports = {allArticles};
