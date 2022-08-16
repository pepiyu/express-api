const ClienteTypes = require('../models/Etapa_type.model');
const createError = require('http-errors');

const list = (req, res, next) => {

    ClienteTypes.find()
    .then(item => {
        res.json(item);
    })
    .catch(next);
}

const create = (req, res, next) => {
    
    const data = req.body;

    ClienteTypes.create({
        ...data,
        image: req.file?.path
    })
    .then(item => {
        res.status(201).json(item);
    })
    .catch(next)
}

const detail = (req, res, next) => {
    ClienteTypes.findById(req.params.id)
    .then(item => {

        if (item) {
            res.json(item);
        } else {
            next(createError(404, 'item not found'));
        }

    })
}

const update = (req, res, next) => {
    const body = {title, address, description, phoneNumber} = req.body;

    ClienteTypes.findByIdAndUpdate(req.params.id, body, { new: true }).then( item => {
        if (item) {
            res.json(item);
        } else {
            next(createError(404, 'item not found'));
        }
    })
}

const remove = (req, res, next) => {
    ClienteTypes.findByIdAndRemove(req.params.id)
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