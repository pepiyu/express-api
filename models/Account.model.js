const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    title: {
        type: String,
        required: true,
        minlength: 5,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 9,
    },
    image: {
        type: String, 
        required: true,
        
    },

}, { timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id
            delete ret._id
            delete ret.__v
        }
    }

})

module.exports = mongoose.model('Account', schema)