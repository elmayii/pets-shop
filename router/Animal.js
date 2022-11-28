const express= require("express");
const authRegistry = require('../controler/auth/registry')
const registry = require('../controler/Animal/registry')

const Animal = express.Router()

//CRUDS Animal
Animal.post('/',authRegistry.authorization,authRegistry.SecurityLevel1,registry.create)

Animal.get('/',registry.read_all)

Animal.get('/:id',registry.read)

Animal.patch('/:id',authRegistry.authorization,authRegistry.SecurityLevel1,registry.update)

Animal.delete('/:id',authRegistry.authorization,authRegistry.SecurityLevel1,registry.delete)

module.exports = Animal