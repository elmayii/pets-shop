const jwt = require('jsonwebtoken');
const Decode = require('../../helper/Decode');
const User = require('../../model/user');

const authorization = async (req,res,next) =>{
    const {token} = req.headers;

    console.log(token)
    if(!token) return res.status(401).json("Authorization Error");
    try {
        const jwtData=Decode(token)
        const {id,date,rol}=jwtData
        let data=await User.findOne({where:{
            id:id,
            rol:rol,
            login:date
        }})
        if(!data){
            return res.status(401).json("Autorization Error")
        }
        return next()
    } catch (error) {
        console.log(error)
        return res.status(401).json("Autorization Error")
    }
}

module.exports = authorization
