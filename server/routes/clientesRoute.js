const { Router } = require("express")
const clientesControllers = require("../controllers/clientesController");

class ClientesRoutes {
  
    constructor(){
        this.router = Router();
        this.config()
    }

    config(){
        this.router.get('/' , clientesControllers.listar);
        this.router.get('/:id' , clientesControllers.listarUno);


        
    }
}

const clientesRoute = new ClientesRoutes();
module.exports = clientesRoute.router;