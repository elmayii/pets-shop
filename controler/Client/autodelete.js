const User = require("../../model/user")
const Decode = require('../../helper/Decode');

const autodelete = async (req,res) =>{
    const {token} = req.headers
    const jwtData= Decode(token)
    const {id} = jwtData
    try{
        await User.destroy({where:{
            id:id
        }})
        return res.status(200).json('Cuenta Eliminada Exitosamente')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = autodelete