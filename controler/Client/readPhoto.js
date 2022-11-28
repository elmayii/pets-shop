const Decode = require("../../helper/Decode")
const Photo = require("../../model/Photo")
const User = require("../../model/user")

const readPhoto = async (req,res)=>{
    const{token} = req.headers
    const jwtData = Decode(token)
    const {id} = jwtData

    try {
     const user = await User.findByPk(id)
    if(user){
        const pic= await Photo.findOne({where:{id:user.dataValues.photo}})
        console.log(pic)
        if(pic){
            return res.status(200).json(pic)
        }
        else{
            return res.status(404).json("Not Found")
        }
    }
    else{
        return res.status(404).json('Not Found')
    }   
    } catch (error) {
       console.log(error)
       return res.status(500).json('Something happend') 
    }
}

module.exports = readPhoto