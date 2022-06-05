const ActivityTypes = require('../models/Activity_type.model');
const createError = require('http-errors');

const list = (req, res, next) => {

    ActivityTypes.find()
    .then(item => {
        res.json(item);
    })
    .catch(next);
}

const create = (req, res, next) => {
    
    const data = req.body;

    ActivityTypes.create({
        ...data,
        image: req.file?.path
    })
    .then(item => {
        res.status(201).json(item);
    })
    .catch(next)
}

const detail = (req, res, next) => {
    ActivityTypes.findById(req.params.id)
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

    ActivityTypes.findByIdAndUpdate(req.params.id, body, { new: true }).then( item => {
        if (item) {
            res.json(item);
        } else {
            next(createError(404, 'item not found'));
        }
    })
}

const remove = (req, res, next) => {
    ActivityTypes.findByIdAndRemove(req.params.id)
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