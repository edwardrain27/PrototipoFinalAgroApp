const { Router } =require("express");
const cultivoSubterrenoControllers =require('../controllers/cultivosSubterrenosController');

class cultivoSubterrenosRoute {
    
    constructor() {
        this.router= Router();
        this.config();
        

    }
    config(){

        this.router.post('/' , cultivoSubterrenoControllers.listar);
        this.router.get('/', cultivoSubterrenoControllers.listar);
        this.router.get('/:id', cultivoSubterrenoControllers.listarUno);
        this.router.put('/:id', cultivoSubterrenoControllers.editar);
        this.router.delete('/:id', cultivoSubterrenoControllers.eliminar);
    }
};

const cultivoSubterrenoRoute = new cultivoSubterrenosRoute ();
module.exports = cultivoSubterrenoRoute.router;