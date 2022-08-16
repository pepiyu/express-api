const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    full_name: {
        type: String,
        required: true,
        minlength: 1,
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
    },
    nif: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
    },
    type: {
        type: mongoose.ObjectId,
        required: false,
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

module.exports = mongoose.model('Contact', schema)