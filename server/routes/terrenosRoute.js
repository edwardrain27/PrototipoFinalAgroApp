const { Router } =require('express');
const terrenoControllers = require('../controllers/terrenosController');

class TerrenosRoutes {
    
    constructor() {
        this.router= Router();    
        this.config();
    }

     config(){
         this.router.post('/' , terrenoControllers.crear);
         this.router.get('/', terrenoControllers.listar);
         this.router.get('/:id', terrenoControllers.listarUno);
         this.router.put('/:id', terrenoControllers.editar);
         this.router.delete('/:id', terrenoControllers.eliminar);
         

     }
 }
 

 const terrenoRoute = new TerrenosRoutes();
 module.exports = terrenoRoute.router;