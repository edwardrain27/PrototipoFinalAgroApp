
const pool = require('../database');
const {request , response} = require('express');
const {reporteSubterrenos, reporteDimanico} = require('../services/subterrenoService');
 class SubterrenosControllers {

    listar = async (req=request , res=response )=>{
        const terreno = await pool.query('SELECT * FROM subterreno')
        console.log(req.body)
        res.json({terreno});
    
    }

    getReporte = async(req, res) =>{

        const consulta = await reporteDinamico({estado:"Ocupado"});
        console.log(consulta);
        res.json(consulta);
    }


    

    crear= async(req=request , res=response)=>{
        await pool.query('INSERT INTO subterreno set ?' , [req.body]);
        res.json({message: 'Suberreno agregado'})
        console.log(req.body)
    }

    listarUno =async(req=request , res=response)=>{
        const{id} = req.params
        const terreno = await pool.query('SELECT * FROM subterreno WHERE idsubterreno = ?' , [id])
        if (terreno.length > 0){
            return res.json(terreno[0])
        } else{
        res.status(404).json({text: "Subterreno no encontrado"})
        }
        

    }

    editar= async(req=request , res=response)=>{
        const{id} = req.params
        await pool.query('UPDATE subterreno set ? WHERE idsubterreno  = ?' , [req.body , id])

        res.json({message: 'El Subterreno fue editado'})

    }

    eliminar = async (req=request , res=response)=>{
        const {id} = req.params
        await pool.query('DELETE FROM subterreno WHERE idsubterreno = ?' , [id]);
        res.json({text: `Subterreno eliminado eliminado ${req.params.id}`});
    }    


 };

 const subterrenoControllers = new SubterrenosControllers();
 module.exports = subterrenoControllers;
 