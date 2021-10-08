const pool = require('../database');
const {request , response} = require('express');

class TerrenosControllers {

    listar = async(req=request , res=response )=>{
        const terreno = await pool.query('SELECT * FROM terrenos')
        console.log(req.body)

        
        res.json({terreno})
        
    }

    crear = async(req=request , res=response)=>{
        await pool.query('INSERT INTO terrenos set ?' , [req.body]);
        res.json({message: 'Terreno agregado'})
        console.log(req.body)
    }

    listarUno = async(req=request , res=response)=>{
        const{id} = req.params
        const terreno = await pool.query('SELECT * FROM terrenos WHERE idterrenos= ?' , [id])
        if (terreno.length > 0){
            return res.json(terreno[0])
        } else{
        res.status(404).json({text: "Terreno no encontrado"})
        }
    }

    editar = async(req=request , res=response)=>{
        const{id} = req.params
        await pool.query('UPDATE terrenos set ? WHERE idterrenos = ?' , [req.body , id])

        res.json({message: 'El terreno fue editado'})

    }

    eliminar = async(req=request , res=response)=>{
        const {id} = req.params
        await pool.query('DELETE FROM terrenos WHERE idterrenos = ?' , [id]);
        res.json({text: `Terreno eliminado eliminado ${req.params.id}`});
        

    }


};

const terrenoControllers = new TerrenosControllers();
module.exports = terrenoControllers;