const express= require("express");
const authRegistry = require('../controler/auth/registry')
const registry = require('../controler/Photo/registry');
const fileUpload = require("../helper/photoMidelware");

const Photo = express.Router()

//CRUDS Pet
Photo.post('/',authRegistry.authorization,authRegistry.SecurityLevel2,fileUpload,registry.create)

Photo.get('/',authRegistry.authorization,authRegistry.SecurityLevel1,registry.read_all)

Photo.get('/:id',authRegistry.authorization,authRegistry.SecurityLevel1,registry.read)

Photo.patch('/:id',authRegistry.authorization,authRegistry.SecurityLevel2,fileUpload,registry.update)

Photo.delete('/:id',authRegistry.authorization,authRegistry.SecurityLevel2,registry.delete)

module.exports = Photo