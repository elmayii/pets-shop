const Pet = require("../../model/Pet")
const Decode = require('../../helper/Decode');

const read_all = async (req,res) =>{
    const {limit,offset,token} = req.headers
    const jwtData= Decode(token)
    const {id} = jwtData
    try {
      await Pet.findAll({offset:parseInt(offset),limit:parseInt(limit),where:{
        userId:id
      }})
    .then((data) =>{
        return res.status(200).json(data)
    })  
    } catch (error) {
        return res.status(400).json('Bad Request')
    }
    
}

module.exports = read_all