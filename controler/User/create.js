const User = require("../../model/user")
const validarUser= require('../../helper/validarUser.js')

const create = async (req,res) =>{
    const {name,username,password,rol} = req.body
        try{
            if(await validarUser(name)==false){
                return res.status(400).json('Bad Request')
            }  
            else{
                await User.create({
                name,
                username,
                password,
                rol
                })
            return res.status(201).json("Create Succes")
            }
        }
        catch(error){
            console.log(error)
            return res.status(500).json('Something happend')
        }
}

module.exports = create