const pool =require("../database");
const { request , response } = require('express');


class HerramientasControllers {
    
    
    listar = async(req=request , res=response)=> {

        const herramienta = await pool.query('SELECT * FROM herramientas')
        res.json(herramienta);
    }

    listarUno = async(req=request , res=response)=>{
        
        const{id} = req.params
        const herramienta = await pool.query('SELECT * FROM herramientas WHERE insu_id = ?' , [id])
        if (herramienta.length > 0){
            return res.json(herramienta[0])
        }
        res.status(404).json({text: "El insumo no esta disponible"})
    }
}

const herramientasControllers = new HerramientasControllers();
module.exports = herramientasControllers;