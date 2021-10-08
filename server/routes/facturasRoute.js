const { Router } = require("express")
const facturasControllers = require("../controllers/facturasController");

class FacturasRoutes {
    
    constructor() {
        this.router= Router();    
        this.config();
    }
    config(){ //definir ruta inicial
        this.router.get('/' , facturasControllers.listar);
        this.router.get('/:id', facturasControllers.listarUno);

    }
}

const facturasRoute = new FacturasRoutes();
module.exports = facturasRoute.router;