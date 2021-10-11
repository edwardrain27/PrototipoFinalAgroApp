const { Router } = require("express");
const {check} = require("express-validator");
const {validarCampos }= require('../middlewares/validar.campos');
const mantenimientoMNsubteControlers = require('../controllers/manteNNsubterrController');



class MantenimientoMNsubteRoute {
    constructor (){
        this.router= Router()
        this.config()
    }

    config(){
        
        this.router.post('/' ,[
            check('fk_mantenimentos' , "Por favor, ingrese una referencia de mantenimiento valida")
            .not()
            .isEmpty(),
            check('fk_subterreno' , 'Por favor, ingrese una referencia de subterreno valida')
            .not()
            .isEmpty(),
            check('ms_costo' , 'Por favor ingrese el costo')
            .not()
            .isEmpty(),
            check('fecha_final_man_sub' , 'Por favor, ingrese una fecha valida')
            .isDate(),

            validarCampos
        ], mantenimientoMNsubteControlers.crear);

        this.router.get('/reporte' , mantenimientoMNsubteControlers.getReporte);
        this.router.get('/', mantenimientoMNsubteControlers.listar);
        this.router.get('/:id', mantenimientoMNsubteControlers.listarUno);
        this.router.put('/:id', [
            check('fk_mantenimentos' , "Por favor, ingrese una referencia de mantenimiento valida")
            .not()
            .isEmpty(),
            check('fk_subterreno' , 'Por favor, ingrese una referencia de subterreno valida')
            .not()
            .isEmpty(),
            check('ms_costo' , 'Por favor ingrese el costo')
            .not()
            .isEmpty(),
            check('fecha_final_man_sub' , 'Por favor, ingrese una fecha valida')
            .isDate(),
            validarCampos         
        ],mantenimientoMNsubteControlers.editar);
        this.router.delete('/:id', mantenimientoMNsubteControlers.eliminar);
        
    }
}
const mantenimientoMNsubteRoutes = new MantenimientoMNsubteRoute();
module.exports = mantenimientoMNsubteRoutes.router;