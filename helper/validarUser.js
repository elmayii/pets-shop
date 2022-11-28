const User = require("../model/user.js")

const validarUser = async (name) =>{
    try {
    let flag=false
    await User.findOne({where:{name:name}})
    .then(async (data) =>{
        if(data){
            console.log('existe el usuario')
        }
        else{
                    let pat_mail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/g
                    if(pat_mail.test(name)){
                       flag= true
                    }
                    else{
                        console.log('mail no valido')
                    }
        }
    })
    return flag
    }catch (error) {
        console.log(error)
    }
}

module.exports= validarUser