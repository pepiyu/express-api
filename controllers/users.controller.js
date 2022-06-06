const User = require('../models/User.model')
const createError = require('http-errors')
const mailer = require('../config/mailer.config')
const jwt = require('jsonwebtoken')

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
    const body = ({ email, password } = req.body)

    User.findOne( { email, active: true })
    .then((user) => {
        if (user) {
            user.checkPassword(password)
            .then((match) => {
                if (match) {

                    // Cookie auth
                    req.session.user = user.id
                    //res.json(user)

                    //JWT auth
                    const token = jwt.sign(
                        {
                            sub: user.id,
                            exp: Math.floor(Date.now() / 1000) + 60 * 60,
                        }, process.env.JWT_SECRET)

                    res.json({
                        accessToken: token,
                    })

                } else {
                    next(createError(401, "Unauthorized"))
                }
            })
        } else {
            next(createError(404, "User not found"))
        }
    })
    .catch(next)

}


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
    //req.logout();
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