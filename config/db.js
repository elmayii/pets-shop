const Sequelize = require("sequelize");

const db= new Sequelize('pet-business', "root","firY#D#)Qch2",{
    host:"127.0.1.0",
    port:3306,
    dialect:'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases:false
});

module.exports = db;