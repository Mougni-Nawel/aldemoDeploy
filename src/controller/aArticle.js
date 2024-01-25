// const fs = require('fs');

// const app = require('../../server');

const articleController ={};
const articles = require('../db/sequelize');

const article = function (req, res) {
        console.log(articles);
        
        const { id } = req.params;
        articles.findOne({
            where: { id: Number(id) },
        }).then(article => {
            res.json({
                data: article
            })
        });

        
    };
    // res.render({articles: pool.execute});


module.exports = article;
