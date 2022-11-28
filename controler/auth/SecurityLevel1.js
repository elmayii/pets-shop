const jwt = require('jsonwebtoken');
const Decode = require('../../helper/Decode');

const SecurityLevel1 = (req,res,next) =>{
    const level =1;
    const {token} = req.headers
    const jwtData=Decode(token)
    const {rol} = jwtData
    if(rol<level){
        return res.status(403).json("Forbiben")
    }
    return next()
}

module.exports = SecurityLevel1