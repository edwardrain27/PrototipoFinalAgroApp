const pool = require('../database');
const {request,response} = require('express');



class CultivosSubterrenosControllers{

    listar = async(req=request, res=response)=>{

        const listado = await pool.query('SELECT * from subterreno_has_tipo_cultivos');
        if(listado.length > 0)
        {
            res.json({listado});
        }else{
            res.status(404).json({
                msg:'No existen registros'
            });
       
        }
    }

    crear =async(req=request , res=response)=>{
        await pool.query('INSERT INTO subterreno_has_tipo_cultivos set ?' , [req.body]);
        res.json({message: 'Cultivo agregado'})
        console.log(req.body)
    }
    

    listarUno =async(req=request , res=response)=>{
        const{id} = req.params
        const mantenimiento = await pool.query('SELECT * FROM subterreno_has_tipo_cultivos WHERE id_subterreno_has_tipo_cultivoscol = ?' , [id])
        if (mantenimiento.length > 0){
            return res.json(mantenimiento[0])
        } else{
        res.status(404).json({text: "cultivo no encontrado"})
        }
    }

    editar= async(req=request , res=response)=>{
        const{id} = req.params
        await pool.query('UPDATE subterreno_has_tipo_cultivos set ? WHERE id_subterreno_has_tipo_cultivoscol = ?', [req.body , id])
        res.json({message: 'El cultivo fue editado'})
    }

    eliminar=async(req=request , res=response)=>{
        const {id} = req.params
        await pool.query('DELETE FROM subterreno_has_tipo_cultivos WHERE id_subterreno_has_tipo_cultivoscol = ?' , [id]);
        res.json({text: `mantenimentos eliminado eliminado ${req.params.id}`});
        

    }

}


const cultivoSubterrenoController= new CultivosSubterrenosControllers();
module.exports = cultivoSubterrenoController;