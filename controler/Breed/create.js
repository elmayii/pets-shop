const Breed = require("../../model/Breed")

const create = async (req,res) =>{
    const {name} = req.params
    const data =await Breed.findOne({where:{
        name:name
    }})
        if(data){
            return res.status(400).json('Bad Request')
        }
        else{
            try{
                await Breed.create({
                    name
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