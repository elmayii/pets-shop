const Pet = require("../../model/Pet")

const read_all = async (req,res) =>{
    const {limit,offset} = req.headers
    try {
      await Pet.findAll({offset:parseInt(offset),limit:parseInt(limit)})
    .then((data) =>{
        return res.status(200).json(data)
    })  
    } catch (error) {
        return res.status(400).json('Bad Request')
    }
    
}

module.exports = read_all