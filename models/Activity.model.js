const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    due_date: Date,
    opportunity_id: mongoose.ObjectId,
    activity_id: mongoose.ObjectId,
    comment: {
        type: String,
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