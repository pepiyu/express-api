const User = require('../models/User.model')
const createError = require('http-errors')
const mailer = require('../config/mailer.config')
const jwt = require('jsonwebtoken')
const passport = require('passport');

const create = (req, res, next) => {
    const data = { username, email, bio, password } = req.body

    User.create(data)
    .then((user) => {
        mailer.sendValidationEmail(user)
        res.status(201).json(user)

    })
    .catch(next)
}

const update = (req, res, next) => {
    const body = { username, email, bio, password } = req.body

    User.findByIdAndUpdate(req.params.id, body, { new: true })
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            next(createError(404, 'User not found'))
        }
    })
}

const list = (req, res, next) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(next)
}
 
const login = (req, res, next) => {
    passport.authenticate('local-auth', (error, accessToken, validations) => {
        if (error) {
          next(error);
        } else if (!accessToken) {
          next(createError(400, validations))
        } else {
          req.login(accessToken, error => {
            if (error) next(error)
            else res.json(accessToken)
          })
        }
      })(req, res, next);}


const activate = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, { active: true }, { new: true })
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            next(createError(404, 'User not found'))
        }
    })
}

const logout = (req, res, next) => {
    req.session.destroy()
    res.status(204).end()
}

module.exports = {
    create,
    update,
    list,
    login,
    activate,
    logout
}