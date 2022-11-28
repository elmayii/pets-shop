const Pet = require("../../model/Pet")

const create = async (req,res) =>{
    const {name,breedId,userId} = req.body
    const data =await Pet.findOne({where:{
        name:name,
        breedId:breedId,
        userId:userId
    }})
        if(data){
            return res.status(400).json('Bad Request')
        }
        else{
            try{
                await Pet.create({
                    name,
                    breedId,
                    userId
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