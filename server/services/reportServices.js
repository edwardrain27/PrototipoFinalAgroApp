
const pool = require('../database');
//const {escape} = require('mysql');
//const { is } = require('bluebird');


reporteTrabajadores = async({area,estado})=>{

    let query = 'SELECT * FROM subterreno WHERE 1=1';

    if(area) {
        query+=` AND sub_area = ${area}`;
    }
    if(estado)
    {   
        query+=` AND sub_estado = ${estado}`;
    }


    return await pool.query(query);
}


module.exports = {
    reporteTrabajadores
}