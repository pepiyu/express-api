const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    opportunity_id: {
        type: mongoose.ObjectId,
        required: true
    },
    etapa_id: {
        type: mongoose.ObjectId,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
    },
    timeDotColor: {
        type: Boolean,
        required: true,
    },
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

module.exports = mongoose.model('Timeline', schema)