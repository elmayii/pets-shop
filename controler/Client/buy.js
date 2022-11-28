const Decode = require('../../helper/Decode');
const Animal = require("../../model/Animal");
const Pet = require("../../model/Pet");

const buy = async (req,res) =>{
    const {token,name} = req.headers
    const jwtData= Decode(token)
    const {id} = jwtData
    const {Id}= req.params
    try {
        const data= await Animal.findByPk(Id)
        console.log(data)
        if(data && data.dataValues.amount>0){
            try {
                await Pet.create({
                name,
                breedId:data.dataValues.breedId,
                userId:id
              })
              await Animal.increment({amount:-1},{where:{id:Id}})
              return res.status(200).json('Pet Succesfuly Buy')
            } catch (error) {
                console.log(error)
                throw error
            }
        }
        else{
            if(data){
                return res.status(400).json('No disponible')
            }
            return res.status(404).json('Not Found')
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json('Something happend')
    }
}

module.exports = buy