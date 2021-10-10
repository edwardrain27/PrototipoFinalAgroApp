
const pool = require('../database')



const validarRegistros = async(tabla, campo, valor)=>{

    let query = `SELECT COUNT(*) as num FROM ${tabla} WHERE ${campo} = ${valor}`;

    let consulta = await pool.query(query); //devuelve numero
    //return !!consulta; //convierte el dato a booleano si es 0, es falso, si es diferente de cero true
    console.log(valor);
    consulta = consulta[0].num;

    return new Promise((resolve, reject)=>{
        if(consulta > 0)
        {
            reject({msg:'Ya existe el registro'});
        }
        resolve();

    })
}   

module.exports = {
    validarRegistros
}