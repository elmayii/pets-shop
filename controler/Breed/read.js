const Breed = require("../../model/Breed")

const read = async (req,res) =>{
    try {
        await Breed.findOne({where:{id:req.params.id}})
    .then((data) =>{
        if(data){
            return res.status(200).json(data)
        }
        else{
            return res.status(404).json('Not found')
        }
    })
    } catch (error) {
        return res.status(500).json('Something Happend')
    }
}

module.exports = read