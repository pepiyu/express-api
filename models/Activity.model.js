const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    due_date: {
        type: Date,
        required: true
    },
    opportunity_id: {
        type: mongoose.ObjectId,
        required: false,
    },
    account_id: {
        type: mongoose.ObjectId,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    activity_type_id: {
        type: mongoose.ObjectId,
        required: true,
    },
    user_id: {
        type: mongoose.ObjectId,
        required: true,
    }
}, { timestamps: true,
toJSON: {
    transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
    }
}})

module.exports = mongoose.model('Activity', schema)