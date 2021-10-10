

const {Router} = require('express');
const {check} = require('express-validator')
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
        this.router.post('/', [
            check( 'trabajadorId' , 'El trabajador ya existe').exists()

        ],trabajadorController.crear);
        this.router.put('/:id', trabajadorController.editar);
        this.router.delete('/:id', trabajadorController.eliminar);
    }

}

const trabajadorRouter = new TrabajadorRouter();

module.exports = trabajadorRouter.router;