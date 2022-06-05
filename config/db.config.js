const mongoose = require('mongoose');

const MONGODB =
  `mongodb+srv://testuser:${process.env.MONGODB_USER_PASSWORD}@cluster0.lyfex.mongodb.net`;

mongoose.connect(MONGODB)
  .then(db => console.log(`DB connected at ${db.connection.host}`))
  .catch(err => console.error(err));
      
