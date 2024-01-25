const Sequelize = require("sequelize");
const model =  require('../model/article');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE,process.env.DB_USER,process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


//model.map(m=>m(sequelize));
const articles = model(sequelize, Sequelize);
sequelize.sync().then(console.log('DB is synced'));
module.exports = articles;