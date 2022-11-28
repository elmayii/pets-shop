const Photo = require("../../model/Photo")

const update = async (req,res) =>{
    const newName = req.file.originalname
    const newType = req.file.mimetype
    const newData = req.file.buffer
    const {id}= req.params
    try {
        await Photo.update({nameFile:newName,type:newType,data:newData},{where:{
            id:id
        }})
        return res.status(200).json('User Update')
    } catch (error) {
        return res.status(500).json('Something happend')
    }
}

module.exports = update