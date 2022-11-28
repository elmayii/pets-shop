const User = require("../../model/user")

const update = async (req,res) =>{
    const {newName,newUsername,newPass,newPhoto,newRol}= req.body
    const {id} = req.params
    try {
        await User.update({name:newName,username:newUsername,password:newPass,photo:newPhoto,rol:newRol},{where:{
            id:id
        }})
        return res.status(200).json('User Update')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = update