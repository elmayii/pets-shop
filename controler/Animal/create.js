const Animal = require("../../model/Animal")

const create = async (req,res) =>{
    const {shopId,breedId,price,amount} = req.body
    const data =await Animal.findOne({where:{
        shopId:shopId,
        breedId:breedId,
    }})
        if(data){
            return res.status(400).json('Bad Request')
        }
        else{
            try{
                await Animal.create({
                    shopId,
                    breedId,
                    price,
                    amount
                })
                return res.status(201).json("Create Succes")
            }
            catch(error){
                console.log(error)
                return res.status(500).json('Something Happend')
            }
        }
        
}

module.exports = create