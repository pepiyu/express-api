const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    formaPago_description: {
        type: String,
        required: true,
        },
    plazos:{
        type: String,
        required: false,
        },
    documentacion:{
        type: String,
        required: false,
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

module.exports = mongoose.model('FormaPago', schema)