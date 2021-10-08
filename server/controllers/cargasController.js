const pool =require("../database");
const {request, response }= require('express');

class CargasControllers {

    
    listar = async (req=request, res= response)=> {

        cargas = await pool.query('SELECT * FROM cargas')
        res.json({cargas});

    }

    listarUno = async(req=request, res=response)=>{
        
        const{id} = req.params;
        const cargas = await pool.query('SELECT * FROM cargas WHERE idcargas = ?' , [id])
        if (cargas.length > 0){
            return res.json(cargas[0])
        }
        res.status(404).json({text: "CARGA NO EXISTE"})
        
    }

}

const cargasControllers = new CargasControllers();

module.exports = cargasControllers;