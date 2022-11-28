const express= require("express");
const authRegistry = require('../controler/auth/registry')
const registry = require('../controler/User/registry')

const User = express.Router()

//CRUDS User
User.post('/',authRegistry.authorization,authRegistry.SecurityLevel2,registry.create)

User.get('/',authRegistry.authorization,authRegistry.SecurityLevel2,registry.read_all)

User.get('/:id',authRegistry.authorization,authRegistry.SecurityLevel2,registry.read)

User.patch('/:id',authRegistry.authorization,authRegistry.SecurityLevel2,registry.update)

User.delete('/:id',authRegistry.authorization,authRegistry.SecurityLevel2,registry.delete)

module.exports = User