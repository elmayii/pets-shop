const generarJWT= require('../../helper/generarJWT.js')
const time = require('../../helper/time.js');
const User = require("../../model/user");

const Loggin = async (req,res) =>{
    const {name,password} = req.body

    const user={name,password}
    let date =time()
    let inf=await exist(user)
    if(inf){
        try {
            const {id,rol} = inf 
           const token= await generarJWT(id,date,rol)
           await User.update({login:date},{where:{
            id:id
           }})
           return res.status(200).json({'token': token})
        } catch (error) {
            console.log(error)
            res.status(500).json("Problema de servidor")
        }
    }
    else{
        res.status(401).json("Authentification Error")
    }
}

async function exist(user) {
    const {name,password} = user
    let inf={
        id:'',
        rol:0
    }

    try {
        await User.findOne({where:{
        name:name,
        password:password
    }})
        .then(async (data) =>{
            if(data){
                inf.id= data.dataValues.id
                inf.rol=data.dataValues.rol
            }
        })
        return inf
    } catch (error) {
        console.log(error)
        return null
    }
    }

    module.exports = Loggin
