const Sequelize = require("sequelize");
const db = require('../config/db.js');
const Animal = require("./Animal.js");


const Shop = db.define('shop',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        unique:{
            msg:'El nombre de usuario es unico'
        }
    }
})

Shop.associate = function(models) {
    Shop.hasMany(models.Animal,{
        foreignKey: {
            name: "shopId",
            allowNull: false,
          },
          onDelete: "CASCADE"
    });
};

module.exports = Shop