const User = require("../../model/user")
const Decode = require('../../helper/Decode');

const autoupdate = async (req,res) =>{
    const {token} = req.headers
    const jwtData= Decode(token)
    const {id} = jwtData
    const {newName,newUsername,newPass}= req.body
    try {
        const data= await User.findAll({where:{name:newName}})
        console.log(data)
        await User.update({name:newName,username:newUsername,password:newPass},{where:{
            id:id
        }})
        return res.status(200).json('User Update')
    } catch (error) {
        console.log(error.name)
        if(error.name="SequelizeUniqueConstraintError")
            return res.status(400).json('Bad Request')
        return res.status(500).json('Something happend')
    }
}

module.exports = autoupdate