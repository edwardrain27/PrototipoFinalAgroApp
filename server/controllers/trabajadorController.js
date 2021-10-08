const pool = require('../database');
const {request, response } = require('express');


class TrabajadorControllers {


    listar = async(req = request , res = response )=>{
        const traba = await pool.query('SELECT * FROM trabajador')
        res.json({traba})
                
    }

    crear = async(req=request , res=response)=>{
        await pool.query('INSERT INTO trabajador set ?' , [req.body]);
        res.json({message: 'Trabajador agregado'})
        console.log(req.body)
    }

    listarUno = async(req=request , res=response)=>{
        const{id} = req.params
        const trabajador = await pool.query('SELECT * FROM trabajador WHERE trabajadorId = ?' , [id])
        if (trabajador.length > 0){
            return res.json(trabajador[0])
        }
        res.status(404).json({text: "El trabajador no existe"})
        

    }
    editar=async(req=request , res=response)=>{
        const{id} = req.params
        await pool.query('UPDATE trabajador set ? WHERE trabajadorId = ?' , [req.body , id])

        res.json({message: 'El trabajador fue editado'})

    }

    eliminar = async(req=request , res=response)=>{
        const {id} = req.params;
        await pool.query('DELETE FROM trabajador WHERE trabajadorId = ?' , [id]);
        res.json({text: `Trabajador eliminado ${req.params.id}`});
        

    }
};

//Creo objeto de la clase y lo exporto
const trabajadorControllers = new TrabajadorControllers();
module.exports = trabajadorControllers;