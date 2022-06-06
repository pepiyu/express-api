const createError = require('http-errors')
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')

const loadUser = (req, res, next) => {
    if (req.session.user && req.headers.authorization) {
        User.findById(req.session.user)
        .then((user) => {
            if (user) {
                req.user = user
            }

            console.log("token "+req.headers.authorization);
            const token = req.headers.authorization.split('Bearer ')[1]
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                console.log("decoded "+decoded);
                console.log("err "+err);
    
                if(err) {
                    next(createError(404, err))
                }
            })

            
            next()
        }).catch(next)

    } else {    
        next()
    }

}

const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        next(createError(401, "Unauthorized"))
    }
}


const self = function(req, res, next) {
    if (req.params.id == req.user.id) {
      next();
    } else {
      next(createError(403, 'forbidden'))
    }
  };

module.exports = {
    loadUser,
    auth,
    self,

}