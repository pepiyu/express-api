const Accounts = require('../models/Account.model');
const Contact = require('../models/Contact.model');
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
    const data = {title, address, description, phoneNumber} = req.body;
    let files = {}

    if (req.files) {
        files = {
            project_file: req.files.project_file?.[0].path,
            CIE_file: req.files.CIE_file?.[0].path,
            memoria_file: req.files.memoria_file?.[0].path,
            image: req.files.image?.[0].path,
            autorizacion_file: req.files.autorizacion_file?.[0].path,
            nif_file: req.files.nif_file?.[0].path,
            nif_representante_file: req.files.nif_representante_file?.[0].path,
            comunicacion_file: req.files.comunicacion_file?.[0].path,
            certificado_bancario_file: req.files.certificado_bancario_file?.[0].path,
            factura_file: req.files.factura_file?.[0].path,
    
        }
    }

    Accounts.findByIdAndUpdate(req.params.id, 
        {...data,
            ...files,
                    
        }, 
        { new: true }).then( account => {
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

const context = (req, res, next) => {
    Accounts.findById(req.params.id)
    .then((account) => {
        Contact.findById(account.contact_id)
        .then(
            (contact) => {
                res.json({ account, contact });
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