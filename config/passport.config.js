const passport = require('passport');
const User = require('../models/User.model');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken')

passport.serializeUser((user, next) => {
  next(null, user.id);
});

passport.deserializeUser((id, next) => {
  User.findById(id)
    .then(user => next(null, user))
    .catch(next);
});

passport.use('local-auth', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, next) => {
  User.findOne({ email })
    .then(user => {
      if (!user) {
        next(null, null, { message: 'Invalid username or password' })
      } else {
        return user.checkPassword(password)
          .then(match => {
            if (match) {

              const accessToken = jwt.sign(
                {
                    sub: user.id,
                    exp: Math.floor(Date.now() / 1000) + 60 * 60,
                }, process.env.JWT_SECRET)

              next(null, accessToken)
            } else {
              next(null, null, { message: 'Invalid username or password' })
            }
          })
      }
    }).catch(next)
}));
