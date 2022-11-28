const jwt = require('jsonwebtoken');
const User = require('../../model/user');

const Logout = async (req,res) =>{
    const {token} = req.header

    try {
        const jwtData = jwt.verify(token,'asda2c2')
        console.log(jwtData)
        const {id} = jwtData
        try {
           await User.update({login:null},{where:{
            id:id,
        }}) 
        return res.status(200).json("Logout succes")
        } catch (error) {
            console.log(error)
            return res.status(500).json("Something happend")
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json("Something happend")
    }
}

module.exports = Logout