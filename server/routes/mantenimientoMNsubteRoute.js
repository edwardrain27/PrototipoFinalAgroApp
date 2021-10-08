const { Router } = require("express");

const mantenimientoMNsubteControlers = require('../controllers/manteNNsubterrController');


class MantenimientoMNsubteRoute {
    constructor (){
        this.router= Router()
        this.config()
    }

    config(){
        
        this.router.post('/' , mantenimientoMNsubteControlers.crear);
        this.router.get('/', mantenimientoMNsubteControlers.listar);
        this.router.get('/:id', mantenimientoMNsubteControlers.listarUno);
        this.router.put('/:id', mantenimientoMNsubteControlers.editar);
        this.router.delete('/:id', mantenimientoMNsubteControlers.eliminar);
        
    }
}
const mantenimientoMNsubteRoutes = new MantenimientoMNsubteRoute();
module.exports = mantenimientoMNsubteRoutes.router;