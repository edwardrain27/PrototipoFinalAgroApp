
const { Router } =require("express");
const cargasControllers = require('../controllers/cargasController');


class CargasRoute {
    
    constructor(){

        this.router = Router();
        this.config()
    }


    config(){
        this.router.get('/' , cargasControllers.listar);
        this.router.get('/:id', cargasControllers.listarUno);
   
    }
}

const cargasRoute = new CargasRoute();
module.exports = cargasRoute.router;