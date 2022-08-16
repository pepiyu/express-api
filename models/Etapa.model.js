const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    etapa_description: {
        type: mongoose.ObjectId,
        required: true,
    },
    createdAt: Date,
    updatedAt: Date,
    createdBy: String,
    updatedBy: String,
    title: String,
}, 

{
    timestamps: true, toJSON: {
    transform: (doc, ret) => {
        ret.id = doc._id,
          delete ret._id,
          delete ret.__v
      }
    }
})

module.exports = mongoose.model('Etapa', schema)