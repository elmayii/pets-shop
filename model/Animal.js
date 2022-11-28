const Sequelize = require("sequelize");
const db = require('../config/db.js');
const Breed = require("./Breed.js");
const Shop = require("./shop.js");

const Animal = db.define('animal',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    shopId:{
        type: Sequelize.INTEGER
    },
    breedId:{
        type:Sequelize.INTEGER
    },
    price:{
        type:Sequelize.DOUBLE
    },
    amount:{
        type:Sequelize.INTEGER
    }
})

module.exports = Animal