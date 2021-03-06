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

const detail = (req, res, next) => {

    User.findById(req.params.id).then((user) => {
        if (user) {
            res.json(user);
        } else {
            next(createError(404, 'item not found'))
        }
    })
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
    passport.authenticate('local-auth', (error, user, validations) => {
        if (error) {
          next(error);
        } else if (!user) {
          next(createError(400, validations))
        } else {
          req.login(user, error => {
            if (error) {
                next(error)

            } else {

                //JWT auth
                const token = jwt.sign(
                    {
                        sub: user.id,
                        exp: Math.floor(Date.now() / 1000) + 60 * 60,
                    }, process.env.JWT_SECRET)

                res.json({
                    accessToken: token,
                })

            }
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
    detail,
    update,
    list,
    login,
    activate,
    logout
}