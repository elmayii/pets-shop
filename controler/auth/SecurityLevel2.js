const jwt = require('jsonwebtoken');
const Decode = require('../../helper/Decode');

const SecurityLevel2 = (req,res,next) =>{
    const level =2;
    const {token} = req.headers
    const jwtData=Decode(token)
    const {rol} = jwtData
    if(rol<level){
        return res.status(403).json("Forbiben")
    }
    return next()
}

module.exports = SecurityLevel2