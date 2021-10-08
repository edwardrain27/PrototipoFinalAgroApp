const pool =require("../database");
const  { request , response } = require('express');

class FacturasControllers {

    listar = async (req=request, res=response) => {

        const insumos = await pool.query('SELECT * FROM facturas');
        res.json({insumos});

    }

    listarUno = async(req=request , res=response)=>{
        const{id} = req.params
        const insumo = await pool.query('SELECT * FROM facturas WHERE idfacturas = ?' , [id])
        if (insumo.length > 0){
            return res.json(insumo[0])
        }
        res.status(404).json({text: "Factura no disponible"})
        
    }    

}

const facturasControllers = new FacturasControllers();
module.exports = facturasControllers;