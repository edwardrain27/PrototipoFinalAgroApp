const { Router } = require("express");
const herramientasControllers = require("../controllers/herramientasController");


class HerramientasRoutes {
    
    constructor(){
        this.router= Router();
        this.config()
    }

    config(){
        this.router.get('/',herramientasControllers.listar);
        this.router.get('/:id',herramientasControllers.listarUno);
    }
}

const herramienasRoutes = new HerramientasRoutes();
module.exports =herramienasRoutes.router;