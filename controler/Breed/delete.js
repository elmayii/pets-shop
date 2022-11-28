const Breed = require("../../model/Breed")

const Delete = async (req,res) =>{
    const {id} = req.params
    try{
        await Breed.destroy({where:{
            id:id
        }})
        return res.status(200).json('Shop delete')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = Delete