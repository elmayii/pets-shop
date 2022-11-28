const Decode = require('../../helper/Decode');
const Pet = require("../../model/Pet");

const Delete = async (req,res) =>{
    const {token} = req.headers
    //id de la mascota
    const {Id} = req.params
    const jwtData= Decode(token)
    //id del cliente
    const {id} = jwtData
    try{
        await Pet.destroy({where:{
            id:Id,
            userId:id
        }})
        return res.status(200).json('Pet delete')
    } catch (error) {
        return res.status(404).json('Not Found')
    }
}

module.exports = Delete