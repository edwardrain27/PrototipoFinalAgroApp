
const pool =require("../database");
const { request , response } = require("express");

class InsumosControllers {

        listar = async(req=request , res=response)=> {

            const insumos = await pool.query('SELECT * FROM insumos')
            res.json(insumos);

        }

        listarUno = async (req=request , res=response)=>{
            
            const{id} = req.params
            const insumo = await pool.query('SELECT * FROM insumos WHERE insu_id = ?' , [id])
            if (insumo.length > 0){
                return res.json(insumo[0])
            }
            res.status(404).json({text: "El insumo no esta disponible"})
            
    
        }
}

const insumosControllers = new InsumosControllers()
module.exports = insumosControllers;