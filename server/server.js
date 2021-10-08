
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');



class Server{

    constructor()
    {
        this.app = express();
        this.patchs = {
            "trabajadores":"/api/trabajador",
            "terrenos":"/api/terrenos",
            "subterrenos":"/api/subterrenos",
            "mantenimiento":"/api/mantenimiento",
            "mantenimientoSubte": "/api/mantemnsubte",
            "insumos":"/api/insumos",
            "herramientas":"/api/herramientas",
            "tipoCultivo":"/api/tipocultivo",
            "cargas":"/api/cargas",
            "clientes":"/api/clientes",
            "cultivoSubterreno":"/api/cultivos-subterreno"

        };
        
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
        
    }

    middlewares()
    {
        this.app.use( morgan('dev') );
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
        this.app.use( express.urlencoded({extended:false}) );
    }

    routes()
    {   
        
        this.app.use(this.patchs.trabajadores, require('./routes/trabajadorRoute'));
        this.app.use(this.patchs.cargas, require('./routes/cargasRoute'));
        this.app.use(this.patchs.clientes, require('./routes/clientesRoute'));
        this.app.use(this.patchs.herramientas, require('./routes/herramientasRoute'));
        this.app.use(this.patchs.insumos, require('./routes/insumosRoute'));
        this.app.use(this.patchs.mantenimiento, require('./routes/mantenimientosRoute'));
        this.app.use(this.patchs.mantenimientoSubte, require('./routes/mantenimientoMNsubteRoute'));
        this.app.use(this.patchs.tipoCultivo, require('./routes/tipoCultivosRoute'));
        this.app.use(this.patchs.terrenos, require('./routes/terrenosRoute'));
        this.app.use(this.patchs.subterrenos, require('./routes/subterrenosRoute'));
        this.app.use(this.patchs.insumos, require('./routes/insumosRoute'));
        this.app.use(this.patchs.cultivoSubterreno, require('./routes/cultivoSubterrenosRoute'));

    }   
    start()
    {
        this.app.listen(this.port, ()=>{
            console.log(`El servidor esta corriendo en el puerto: ${this.port}`);
        })
    }
}

module.exports = Server;