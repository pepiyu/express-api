const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');

const MongoStore = connectMongo(expressSession);

const session = expressSession({
  secret: 'super secret',
  saveUninitialized: false,
  resave: false,
  cookie: {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: process.env.SESSION_MAX_AGE || 3600000000,
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: process.env.SESSION_MAX_AGE || 3600,
  })
});

module.exports = session;