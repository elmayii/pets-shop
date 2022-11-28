const Photo = require("../../model/Photo")

const read_all = async (req,res) =>{
    let {limit,offset} = req.headers
    try {
      await Photo.findAll({offset:parseInt(offset),limit:parseInt(limit)})
    .then((data) =>{
        return res.status(200).json(data)
    })  
    } catch (error) {
        console.log(error)
        return res.status(400).json('Bad Request')
    }
    
}

module.exports = read_all