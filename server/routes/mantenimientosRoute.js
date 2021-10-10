const { Router } =require("express");
const mantenimientoControllers =require('../controllers/mantenimientosController');
const {check} = require('express-validator');
class MantenientosRoutes {
    
    constructor() {

        this.router= Router();
        this.config();
        
    }
    config(){

        this.router.post('/',[
            check("ma_fecha","No es una fecha validad").isDate(),
            check("ma_estado","Por favor, digite un estado").not().isEmpty()
        ] , mantenimientoControllers.crear);
        this.router.get('/', mantenimientoControllers.listar);
        this.router.get('/:id', mantenimientoControllers.listarUno);
        this.router.put('/:id', mantenimientoControllers.editar);
        this.router.delete('/:id', mantenimientoControllers.eliminar);
    }
};

const mantenimientoRoutes = new MantenientosRoutes();
module.exports =mantenimientoRoutes.router;