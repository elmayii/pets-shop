const Pet = require("../../model/Pet")

const update = async (req,res) =>{
    const {newName,newBreed,newuserId}= req.body
    const {id} = req.params
    try {
        await Pet.update({name:newName,breedId:newBreed,userId:newuserId},{where:{
            id:id
        }})
        return res.status(200).json('User Update')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = update