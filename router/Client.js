const express= require("express");
const authRegistry = require('../controler/auth/registry')
const registry = require('../controler/Client/registry');
const fileUpload = require("../helper/photoMidelware");

const client = express.Router()

//Funciones del cliente
client.post(`/sing_up`,fileUpload, authRegistry.Sing_Up)
client.post('/loggin', authRegistry.Loggin)
client.post('/logout',authRegistry.authorization, authRegistry.Logout)

client.patch('/client/photo',authRegistry.authorization,fileUpload,registry.updatePhoto)
client.get('/client/photo',authRegistry.authorization,registry.readPhoto)
client.delete('/client/photo',authRegistry.authorization,registry.deletePhoto)
client.delete(`/client/autodelete`,authRegistry.authorization, registry.autodelete)
client.patch('/client/autoupdate', authRegistry.authorization, registry.autoupdate)

//CRUD de clientes con sus propias mascotas
client.delete('/client/delete/:Id',authRegistry.authorization,registry.delete)
client.patch(`/client/update/:Id`, authRegistry.authorization, registry.update)
client.get('/client/read/:Id', authRegistry.authorization, registry.read)
client.get('/client/read_all',authRegistry.authorization, registry.read_all)
client.post('/client/buy/:Id',authRegistry.authorization, registry.buy)

module.exports= client