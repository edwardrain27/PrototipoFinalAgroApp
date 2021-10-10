const { Router } =require("express");
const cultivoSubterrenoControllers =require('../controllers/cultivosSubterrenosController');
const {check} = require('express-validator');
const {validarCampos }= require('../middlewares/validar.campos');
class cultivoSubterrenosRoute {
    
    constructor() {
        this.router= Router();
        this.config();
    }
    config(){

        this.router.post('/',[
            check('fk_tipo_cultivos',"Por favor, digite una referencia de tipo cultivo")
            .not()
            .isEmpty(),
            check('fk_subterreno',"Por favor, seleccione un subterreno")
            .not()
            .isEmpty(),
            check('fecha',"Por favor, digite una fecha válida")
            .isDate(),
            validarCampos
        ], cultivoSubterrenoControllers.crear);
        this.router.get('/', cultivoSubterrenoControllers.listar);
        this.router.get('/:id', cultivoSubterrenoControllers.listarUno);
        this.router.put('/:id', cultivoSubterrenoControllers.editar);
        this.router.delete('/:id', cultivoSubterrenoControllers.eliminar);
    }
};

const cultivoSubterrenoRoute = new cultivoSubterrenosRoute ();
module.exports = cultivoSubterrenoRoute.router;