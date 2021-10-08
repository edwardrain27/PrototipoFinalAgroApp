

const {Router} = require('express');
const trabajadorController = require('../controllers/trabajadorController');


class TrabajadorRouter{

    constructor()
    {
        this.router = Router();
        this.config();
    }
    config()
    {
        this.router.get('/',trabajadorController.listar);
        this.router.get('/:id', trabajadorController.listarUno);
    }

}

const trabajadorRouter = new TrabajadorRouter();

module.exports = trabajadorRouter.router;