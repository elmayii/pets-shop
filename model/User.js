const Sequelize = require("sequelize");
const db = require('../config/db.js');
const Pet = require("./Pet.js");
const Photo = require("./Photo.js");

const User = db.define('user',{
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
    },
    username:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    photo:{
        type:Sequelize.INTEGER
    },
    rol:{
        type:Sequelize.INTEGER
    },
    login:{
        type:Sequelize.DATE
    }
})

  Photo.associate = function(models) {
    Photo.hasOne(models.User,{
        foreignKey: {
            name: "photo",
            allowNull: false,
          },
          onDelete: "CASCADE"
    });
  };


module.exports = User