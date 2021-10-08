
const {check, validationResult} = require('express-validator');
const {resultValidation} = require('express-validator');
const {request, response} = require('express');

const validarCampos = (req=request, res=response,next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){

        return errors;
    }

    next();
}