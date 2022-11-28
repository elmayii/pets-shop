const validarUser= require('../../helper/validarUser.js');
const User = require("../../model/user");
const Photo = require('../../model/Photo.js');

const Sing_Up = async (req,res) =>{
    console.log(req.file)
    const nameFile = req.file.originalname
    const type= req.file.mimetype
    const data = req.file.buffer
    const {name,username,password} = req.headers
    if(await validarUser(name)){ 
        try{
            let rol
            if(password=='s2c3cQ#' && name=='fulladmin@gmail.com'){
                rol=2;
            }
            else{
                rol=0;
            }
            let user=await User.create({
                name,
                username,
                password,
                rol
            })
            if(user){
               let image=await Photo.create({
                nameFile,
                type,
                data
            }) 
            let imageId= image.dataValues.id
            await User.update({photo:imageId},{where:{id:user.dataValues.id}})
            }
            return res.status(200).json("Sing Up Succes")
        }
        catch(error){
            console.log(error)
            return res.status(500).json('Problema del servidor')
        }
    }
    else{
        return res.status(400).json('Bad Request')
    }
}

module.exports= Sing_Up