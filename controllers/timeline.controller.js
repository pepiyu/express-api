const Timeline = require('../models/Timeline.model');
const Etapa = require('../models/Etapa.model');
const createError = require('http-errors');

const list = (req, res, next) => {

    Timeline.find()
    .then(item => {
        res.json(item);
    })
    .catch(next);
}

const create = (req, res, next) => {
    
    const body = {title, description, createdBy, createdAt} = req.body;

    Timeline.create({
        ...body
    })

    .then(item => {
        res.status(201).json(item);
    })
    .catch(next)
}

const detail = (req, res, next) => {
    Timeline.findById(req.params.id)
    .then(item => {

        if (item) {
            res.json(item);
        } else {
            next(createError(404, 'item not found'));
        }

    })
}

const update = (req, res, next) => {
    const body = {title, description, updatedBy, updatedAt} = req.body;

    Timeline.findByIdAndUpdate(req.params.id, body, { new: true }).then( item => {
        if (item) {
            res.json(item);
        } else {
            next(createError(404, 'item not found'));
        }
    })
}

const remove = (req, res, next) => {
    Timeline.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next);
}

const context = (req, res, next) => {
    Timeline.findById(req.params.id)
    .then((paso) => {
        Etapa.findById(paso.etapa_id)
        .then(
            (etapa) => {
                res.json({ paso, etapa });
            })
        .catch(next);
    }).catch(next);
}

module.exports = {
    list,
    create,
    detail,
    update,
    remove,
    context
}