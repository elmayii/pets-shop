const Sequelize = require("sequelize");
const db = require('../config/db.js');
const Breed = require("./Breed.js");
const User = require("./User.js");

const Pet = db.define('pet',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING
    },
    breedId:{
        type:Sequelize.INTEGER
    },
    userId:{
        type:Sequelize.INTEGER
    }
})

Pet.belongsTo(Breed)

User.hasMany(Pet)

module.exports = Pet