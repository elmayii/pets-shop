const Shop = require("../../model/shop")

const update = async (req,res) =>{
    const {newName}= req.params
    const {id}= req.params
    try {
        await Shop.update({name:newName},{where:{
            id:id
        }})
        return res.status(200).json('User Update')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = update