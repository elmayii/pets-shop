const Sequelize = require("sequelize");
const db = require('../config/db.js');

const Photo = db.define('photos',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nameFile:{
        type: Sequelize.STRING
    },
    type:{
        type:Sequelize.STRING
    },
    data:{
        type:Sequelize.BLOB('long')
    }
})

module.exports = Photo