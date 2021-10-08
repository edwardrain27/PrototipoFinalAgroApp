const { Router } =require("express");
const mantenimientoControllers =require('../controllers/mantenimientosController');

class MantenientosRoutes {
    
    constructor() {
        this.router= Router();
        this.config();
        

    }
    config(){

        this.router.post('/' , mantenimientoControllers.crear);
        this.router.get('/', mantenimientoControllers.listar);
        this.router.get('/:id', mantenimientoControllers.listarUno);
        this.router.put('/:id', mantenimientoControllers.editar);
        this.router.delete('/:id', mantenimientoControllers.eliminar);
    }
};

const mantenimientoRoutes = new MantenientosRoutes();
module.exports =mantenimientoRoutes.router;