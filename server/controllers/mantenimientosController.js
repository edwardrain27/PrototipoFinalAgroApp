
const pool =require("../database");
const { request , response } = require("express");



class MantenimientoControllers {
    
    listar= async(req=request , res=response )=>{
        const mantenimiento = await pool.query('SELECT * FROM mantenimentos')
        console.log(mantenimiento)

        
        res.json({mantenimiento})
        
    }

    crear =async(req=request , res=response)=>{
        await pool.query('INSERT INTO mantenimentos set ?' , [req.body]);
        res.json({message: 'mantenimentos agregado'})
        console.log(req.body)
    }

    listarUno =async(req=request , res=response)=>{
        const{id} = req.params
        const mantenimiento = await pool.query('SELECT * FROM mantenimentos WHERE idmantenimentos= ?' , [id])
        if (mantenimiento.length > 0){
            return res.json(mantenimiento[0])
        } else{
        res.status(404).json({text: "mantenimento no encontrado"})
        }
        

    }

    editar= async(req=request , res=response)=>{
        const{id} = req.params
        await pool.query('UPDATE mantenimentos set ? WHERE idmantenimentos = ?' , [req.body , id])

        res.json({message: 'El mantenimento fue editado'})

    }

    eliminar=async(req=request , res=response)=>{
        const {id} = req.params
        await pool.query('DELETE FROM mantenimentos WHERE idmantenimentos = ?' , [id]);
        res.json({text: `mantenimentos eliminado eliminado ${req.params.id}`});
        

    }

}


const mantenimientoControllers = new MantenimientoControllers();
module.exports = mantenimientoControllers;