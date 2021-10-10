
const pool = require('../database');


reporteSubterrenos = async({area, estado, id_terreno})=>{

    let query = 'SELECT * FROM subterreno'
    
    if(area) {
        query+=` WHERE sub_area = ${area}`;
    }

    if(estado)
    {   
        query+=` AND sub_estado = "${estado}"`;
    }
    if(id_terreno)
    {
        query+=` AND fk_terrenos_idterrenos = ${id_terreno}`
    }

    console.log(query);

    return await pool.query(query);

}


reporteDinamico = async({estado})=>{

 
    let query = "SELECT t.te_nombre as nombre, t.te_ubicacion as ubicacion, s.sub_area as area, s.sub_estado as estado"
    query+=" \nFROM terrenos as t"
    query+=" \nINNER JOIN subterreno as s on s.fk_terrenos_idterrenos = t.idterrenos";
     
    console.log(query);

    return await pool.query(query);


}

module.exports = {
    reporteSubterrenos,
    reporteDinamico
}