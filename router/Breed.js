const express= require("express");
const authRegistry = require('../controler/auth/registry')
const registry = require('../controler/Breed/registry')

const Breed = express.Router()

//CRUDS Breed
Breed.post('/:name',authRegistry.authorization,authRegistry.SecurityLevel2,registry.create)

Breed.get('/',registry.read_all)

Breed.get('/:id',registry.read)

Breed.patch('/:id',authRegistry.authorization,authRegistry.SecurityLevel2,registry.update)

Breed.delete('/:id',authRegistry.authorization,authRegistry.SecurityLevel2,registry.delete)

module.exports = Breed