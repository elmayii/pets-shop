const express= require("express");
const authRegistry = require('../controler/auth/registry')
const registry = require('../controler/Pet/registry')

const Pet = express.Router()

//CRUDS Pet
Pet.post('/',authRegistry.authorization,registry.create)

Pet.get('/',authRegistry.authorization,authRegistry.SecurityLevel1,registry.read_all)

Pet.get('/:id',authRegistry.authorization,authRegistry.SecurityLevel1,registry.read)

Pet.patch('/:id',authRegistry.authorization,authRegistry.SecurityLevel1,registry.update)

Pet.delete('/:id',authRegistry.authorization,authRegistry.SecurityLevel1,registry.delete)

module.exports = Pet