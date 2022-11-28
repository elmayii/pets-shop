const Shop = require("../../model/shop")

const Delete = async (req,res) =>{
    const {id} = req.params
    try{
        await Shop.destroy({where:{
            id:id
        }})
        return res.status(200).json('Shop delete')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = Delete