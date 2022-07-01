const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    createdBy: String,
    updatedBy: String,
    title: String,
    description: String,
    source: String,
    closing_date: {
        type: Date,
    },
    probability: {
        type: Number,
        default: 0
    },
    amount: {
        type: Number,
        default: 0
    },
    account_id: {
        type: mongoose.ObjectId,
        required: true,
    },
    stage_id: mongoose.ObjectId,
    oportunity_type_id: {
        type: mongoose.ObjectId,
        required: true,
    },
    /* quotation: [new mongoose.Schema({ path: String })], */


}, { timestamps: true,

toJSON: {
    transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v

    }
}})

module.exports = mongoose.model('Opportunity', schema)