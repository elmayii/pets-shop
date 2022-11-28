const Photo = require("../../model/Photo")
const User = require("../../model/user")
const Decode = require('../../helper/Decode');

const deletePhoto = async (req,res) =>{
    const {token} = req.headers
    const jwtData= Decode(token)
    const {id} = jwtData
    try{
        let photoId= await User.findOne({where:{id:id},attribute:['photo']})
        await Photo.destroy({where:{
            id:photoId
        }})
        await User.update({photo:null},{where:{id:id}})
        return res.status(200).json('Foto Eliminada Exitosamente')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = deletePhoto