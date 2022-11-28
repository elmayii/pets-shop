const Photo = require("../../model/Photo")

const create = async (req,res) =>{
    const type = req.file.mimetype
    const nameFile = req.file.originalname
    const data = req.file.buffer
            try{
                await Photo.create({
                    fileName,
                    type,
                    data
                })
                return res.status(201).json("Create Succes")
            }
            catch(error){
                console.log(error)
                return res.status(500).json('Something Happend')
            }
}

module.exports = create