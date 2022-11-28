const User = require("../../model/user")

const read = async (req,res) =>{
    try {
        await User.findOne({where:{id:req.params.id}})
        .then((data) =>{
            if(data){
                return res.status(200).json(data)
            }
            else{
                return res.status(404).json('Not found')
            }
    })
    } catch (error) {
        return res.status(404).json('Not Found')
    }
    
}

module.exports = read