const pool =require("../database");
const { request , response } = require('express');

class MantenimientoMNsubteControlers {
    
    listar = async (req=response , res=response )=>{
        const mantenimiento = await pool.query('SELECT * FROM mantenimentos_has_subterreno')
        console.log(mantenimiento)

        
        res.json(mantenimiento)
    }

    crear = async (req = request , res=response)=>{
        await pool.query('INSERT INTO mantenimentos_has_subterreno set ?' , [req.body]);
        res.json({message: 'mantenimentos  mn agregado'})
        console.log(req.body)
    }

    listarUno = async(req=request , res=response)=>{
        const{id} = req.params
        const mantenimiento = await pool.query('SELECT * FROM mantenimentos_has_subterreno WHERE iD_mantenimentos_subterrenocol= ?' , [id])
        if (mantenimiento.length > 0){
            return res.json(mantenimiento[0])
        } else{
        res.status(404).json({text: "mantenimento mn no encontrado"})
        }
        

    }

    editar= async(req=request,res=response)=>{
        const{id} = req.params
        await pool.query('UPDATE mantenimentos_has_subterreno set ? WHERE iD_mantenimentos_subterrenocol = ?' , [req.body , id])

        res.json({message: 'El mantenimento mn fue editado'})

    }

    eliminar=async(req=request , res=response)=>{
        const {id} = req.params
        await pool.query('DELETE FROM mantenimentos_has_subterreno WHERE iD_mantenimentos_subterrenocol = ?' , [id]);
        res.json({text: `mantenimentos mn  eliminado ${req.params.id}`});
        

    }

    
}

const manteniMNsubtcontrollers = new MantenimientoMNsubteControlers();
module.exports=manteniMNsubtcontrollers;