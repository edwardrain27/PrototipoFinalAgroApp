const { Router } =require("express");
const insumosControllers = require("../controllers/insumosController");


class InsumosRoutes  {
    
    constructor() {
        this.router = Router();
        this.config();
    }

    config(){
        this.router.get('/' , insumosControllers.listar);
        this.router.get('/:id', insumosControllers.listarUno);

    }
}

const insumosRoutes = new InsumosRoutes();
module.exports = insumosRoutes.router;