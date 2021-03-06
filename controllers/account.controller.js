const Accounts = require('../models/Account.model');
const createError = require('http-errors');

const list = (req, res, next) => {

    Accounts.find()
    .then(accounts => {
        res.json(accounts);
    })
    .catch(next);
}

const create = (req, res, next) => {

    console.log(req.file)
    
    const data = req.body;

    Accounts.create({
        ...data,
        image: req.file?.path,
    })
    .then(account => {
        res.status(201).json(account);
    })
    .catch(next)
}

const detail = (req, res, next) => {
    Accounts.findById(req.params.id)
    .then(account => {

        if (account) {
            res.json(account);
        } else {
            next(createError(404, 'Account not found'));
        }

    })
}

const update = (req, res, next) => {
    const body = {title, address, description, phoneNumber} = req.body;

    Accounts.findByIdAndUpdate(req.params.id, body, { new: true }).then( account => {
        if (account) {
            res.json(account);
        } else {
            next(createError(404, 'Account not found'));
        }
    })
}

const remove = (req, res, next) => {
    Accounts.findByIdAndRemove(req.params.id)
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