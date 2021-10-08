
const { Router } = require("express");
const tipoCultivoControllers = require("../controllers/tipoCultivoController");



class TipoCultivoRouter {
    
    constructor(){
        this.router= Router();
        this.config()
    }

    config(){
        this.router.get('/' , tipoCultivoControllers.listar);
        this.router.get('/:id', tipoCultivoControllers.listarUno);
        this.router.post('/', tipoCultivoControllers.crear);
        this.router.put('/:id', tipoCultivoControllers.editar);
        this.router.delete('/:id', tipoCultivoControllers.eliminar);
   
    }
}

const tipoCultivoRoute = new TipoCultivoRouter()
module.exports =  tipoCultivoRoute.router;