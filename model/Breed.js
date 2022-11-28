const Sequelize = require("sequelize");
const db = require('../config/db.js');
const Animal = require("./Animal.js");
const Pet = require("./Pet.js");

const Breed = db.define('breed',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        unique:{
            msg:'El nombre de raza es unico'
        }
    }
});

Animal.belongsTo(Breed)

Breed.hasMany(Animal)

module.exports = Breed