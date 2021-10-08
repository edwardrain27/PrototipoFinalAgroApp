const pool =require("../database");
const { request , response } = require("express");

class ClientesControllers {
    listar=async (req=request , res=response)=> {

        const insumos = await pool.query('SELECT * FROM clientes')
        res.json({insumos});

    }

    listarUno = async(req=request , res=response)=>{
        const{id} = req.params
        const insumo = await pool.query('SELECT * FROM clientes WHERE idcliente = ?' , [id])
        if (insumo.length > 0){
            return res.json(insumo[0])
        }
        res.status(404).json({text: "Factura no disponible"})
        

    }       

}

const clientesControllers = new ClientesControllers();
module.exports = clientesControllers;