const pool =require("../database");
const { request , response } =require("express");

class TipoCultivoControllers {
    
    listar = async(req=request , res=response)=> {

        const tcultivos = await pool.query('SELECT * FROM tipo_cultivos')
        res.json({tcultivos});

    }


    crear= async(req=request , res=response)=>{
        await pool.query('INSERT INTO tipo_cultivos set ?' , [req.body]);
        res.json({message: 'Cultivo agregado agregado'})
        console.log(req.body)
    }


    listarUno=async(req=request , res=response)=>{
        const{id} = req.params
        const tcultivo = await pool.query('SELECT * FROM tipo_cultivos WHERE idtipo_cultivos = ?' , [id])
        if (tcultivo.length > 0){
            return res.json(tcultivo[0])
        }
        res.status(404).json({text: "El cultivo no esta en el sistema"})
        

    }
    editar=async(req=request , res=response)=>{
        const{id} = req.params;
        await pool.query('UPDATE tipo_cultivos set ? WHERE idtipo_cultivos = ?' , [req.body , id])

        res.json({message: 'El cultivo fue editado'})

    }

    eliminar =async(req=request , res=response)=>{
        const {id} = req.params;
        await pool.query('DELETE FROM tipo_cultivos WHERE idtipo_cultivos = ?' , [id]);
        res.json({text: `Cultivo eliminado eliminado ${req.params.id}`});
        

    }    

}

const tipoCultivoControllers = new TipoCultivoControllers();
module.exports= tipoCultivoControllers;