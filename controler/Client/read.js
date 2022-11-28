const Pet = require("../../model/Pet")
const Decode = require('../../helper/Decode');

const read = async (req,res) =>{
    const {token} = req.headers
    //id de la mascota
    const {Id}= req.params
    const jwtData= Decode(token)
    //id del cliente
    const {id} = jwtData
    try {
        await Pet.findOne({where:{id:Id,userId:id}})
        .then((data) =>{
            if(data){
                return res.status(200).json(data)
            }
            else{
                return res.status(404).json('Not found')
            }
    })
    } catch (error) {
        console.log(error)
        return res.status(500).json('Something Happend')
    }
    
}

module.exports = read