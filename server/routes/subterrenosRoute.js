const { Router } = require("express");
const subterrenoControllers = require('../controllers/subterrenosControllers');


class SubterrenoRoutes {
    
    constructor() {
        this.router = Router();
        this.config();
    }

    config(){

        this.router.post('/' ,  subterrenoControllers.crear);
        this.router.get('/', subterrenoControllers.listar);
        this.router.get('/:id', subterrenoControllers.listarUno);
        this.router.put('/:id', subterrenoControllers.editar);
        this.router.delete('/:id', subterrenoControllers.eliminar);
              

    }
    
}

const subterrenoRoute = new SubterrenoRoutes();
module.exports = subterrenoRoute.router;