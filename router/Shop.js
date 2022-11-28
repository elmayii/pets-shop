const express= require("express");
const authRegistry = require('../controler/auth/registry')
const registry = require('../controler/Shop/registry')

const Shop = express.Router()

//CRUDS Shop
Shop.post('/:name',authRegistry.authorization,authRegistry.SecurityLevel2,registry.create)

Shop.get('/',registry.read_all)

Shop.get('/:id',registry.read)

Shop.patch('/:id',authRegistry.authorization,authRegistry.SecurityLevel2,registry.update)

Shop.delete('/:id',authRegistry.authorization,authRegistry.SecurityLevel2,registry.delete)

module.exports = Shop