const Animal = require("../../model/Animal")

const update = async (req,res) =>{
    const {newShopId,newBreed,newPrice,newAmount}= req.body
    const {id} = req.params
    try {
        await Animal.update({shopId:newShopId,breedId:newBreed,price:newPrice,amount:newAmount},{where:{
            id:id
        }})
        return res.status(200).json('User Update')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = update