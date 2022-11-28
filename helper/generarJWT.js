const jwt = require('jsonwebtoken');
const time = require('./time');

const generarJWT =  (id,date,rol) => {

    return new Promise( (resolve, reject) => {
        jwt.sign( {id,date,rol}, 'asda2c2', ( err, token ) => {
            if ( err ) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve( token );
            }
        })

    })
}


module.exports = generarJWT
