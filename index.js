const express = require('express');
const db = require("./config/db")

const bodyParse= require('body-parser');
const time = require('./helper/time');
const router = require('./router/Client');
const User = require('./router/User');
const Pet = require('./router/Pet');
const Breed = require('./router/Breed');
const Shop = require('./router/shop');
const Animal = require('./router/Animal');

const app = express();

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))

db.authenticate()
    .then(() => console.log('SUCCES, db connect'))
    .catch(error =>console.log(error));

    app.use('/',router)
    app.use('/user',User)
    app.use('/pet',Pet)
    app.use('/breed',Breed)
    app.use('/shop',Shop)
    app.use('/animal',Animal)

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
    
app.listen(port,host,() => {
    console.log('El servidor esta funcionando')
    console.log(time())
})