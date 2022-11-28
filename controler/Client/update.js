const Pet = require("../../model/Pet")
const Decode = require('../../helper/Decode');

const update = async (req,res) =>{
    const {newName,newBreed}= req.body
    //id de la mascota
    const {Id} = req.params
    const {token} = req.headers
    const jwtData= Decode(token)
    //id del cliente
    const {id} = jwtData
    try {
        await Pet.update({name:newName,breedId:newBreed},{where:{
            id:Id,
            userId:id
        }})
        return res.status(200).json('Pet Update')
    } catch (error) {
        console.log(error)
        return res.status(400).json('Bad Request')
    }
}

module.exports = update