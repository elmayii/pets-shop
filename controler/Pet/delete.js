const Pet = require("../../model/Pet")

const Delete = async (req,res) =>{
    const {id} = req.params
    try{
        await Pet.destroy({where:{
            id:id
        }})
        return res.status(200).json('User delete')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = Delete