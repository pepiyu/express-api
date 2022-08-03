const Opportunities = require('../models/Opportunity.model');
const Stage = require('../models/Stage_type.model');
const createError = require('http-errors');

const list = (req, res, next) => {

    Opportunities.find()
    .then(item => {
        res.json(item);
    })
    .catch(next);
}

const create = (req, res, next) => {
    
    const data = req.body;

    Opportunities.create({
        ...data,
        image: req.file?.path
    })
    .then(item => {
        res.status(201).json(item);
    })
    .catch(next)
}

const detail = (req, res, next) => {
    Opportunities.findById(req.params.id)
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

    Opportunities.findByIdAndUpdate(req.params.id, body, { new: true }).then( item => {
        if (item) {
            res.json(item);
        } else {
            next(createError(404, 'item not found'));
        }
    })
}

const remove = (req, res, next) => {
    Opportunities.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next);
}

const context = (req, res, next) => {
    Opportunities.findById(req.params.id)
    .then((item) => {
        Stage.findById(item.stage_id)
        .then(
            (stage) => {
                res.json({ item, stage });
            })
        .catch(next);
    }).catch(next);
}

module.exports = {
    list,
    create,
    detail,
    update,
    remove
}