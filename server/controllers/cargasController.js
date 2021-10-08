const pool =require("../database");
const {request, response }= require('express');

class CargasControllers {

    
    listar = async (req=request, res= response)=> {

        herramienta = await pool.query('SELECT * FROM cargas')
        res.json({herramienta});

    }

    listarUno = async(req=request, res=response)=>{
        
        const{id} = req.params;
        const herramienta = await pool.query('SELECT * FROM cargas WHERE idcargas = ?' , [id])
        if (herramienta.length > 0){
            return res.json(herramienta[0])
        }
        res.status(404).json({text: "CARGA NO EXISTE"})
        
    }

}

const cargasControllers = new CargasControllers();

module.exports = cargasControllers;