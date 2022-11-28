const jwt = require('jsonwebtoken');

function Decode(token){
    const jwtData=jwt.verify(token,'asda2c2')
    return jwtData
}

module.exports = Decode