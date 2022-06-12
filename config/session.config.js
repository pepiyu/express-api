const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');

const MongoStore = connectMongo(expressSession);

const session = expressSession({
  secret: process.env.SESSION_SECRET || 'keyboardCat',
  saveUninitialized: false,
  resave: false,
  cookie: {
    secure: process.env.SESSION_SECURE || true,
    httpOnly: true,
    sameSite: 'none',
    maxAge: process.env.SESSION_MAX_AGE || 3600000000,
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: process.env.SESSION_MAX_AGE || 3600,
  })
});

module.exports = session;