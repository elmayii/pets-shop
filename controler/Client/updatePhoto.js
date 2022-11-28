const Photo = require("../../model/Photo")
const User = require("../../model/user")
const Decode = require('../../helper/Decode');

const autoupdate = async (req,res) =>{
    const {token} = req.headers
    const jwtData= Decode(token)
    const {id} = jwtData
    const newName = req.file.originalname
    const newType = req.file.mimetype
    const newData = req.file.buffer
    console.log(req.file)
    try {
        const data= await User.findByPk(id)
        console.log(data)
        if(data){
            if(data.dataValues.photo!=null){
                console.log('si')
                await Photo.update({nameFile:newName,type:newType,data:newData},{where:{
                        id:data.dataValues.photo
                    }})
            }
            else{
                console.log('no')
                let image=await Photo.create({
                    nameFile:newName,
                    type:newType,
                    data:newData
                })
                await User.update({photo:image.dataValues.id},{where:{id:id}})
            }
            return res.status(200).json('User Photo Update')
        }
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = autoupdate