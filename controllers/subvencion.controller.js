const Subvencion = require('../models/Subvencion.model');
const createError = require('http-errors');

const list = (req, res, next) => {

    Subvencion.find()
    .then(item => {
        res.json(item);
    })
    .catch(next);
}

const create = (req, res, next) => {
    
    const data = req.body;

    Subvencion.create({
        ...data,
        //todo
    })
    .then(item => {
        res.status(201).json(item);
    })
    .catch(next)
}

const detail = (req, res, next) => {
    Subvencion.findById(req.params.id)
    .then(item => {

        if (item) {
            res.json(item);
        } else {
            next(createError(404, 'item not found'));
        }

    })
}

const update = (req, res, next) => {
    const body = req.body;

    let files = {}

    if (req.files) {
        files = {
            formulario: req.files.formulario?.[0].path,
            declaracion_file: req.files.declaracion_file?.[0].path,    
            autorizacion_file: req.files.autorizacion_file?.[0].path,    
            acreditacion_file: req.files.acreditacion_file?.[0].path,    
            acuso_recibo_file: req.files.acuso_recibo_file?.[0].path,    
        }
    }


    Subvencion.findByIdAndUpdate(req.params.id, body, { new: true }).then( item => {
        if (item) {
            res.json(item);
        } else {
            next(createError(404, 'item not found'));
        }
    })
}

const remove = (req, res, next) => {
    Subvencion.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next);
}

module.exports = {
    list,
    create,
    detail,
    update,
    remove
}