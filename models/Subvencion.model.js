const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    account_id: {
        type: mongoose.ObjectId,
        required: true,
    },
    opportunity_id: {
        type: mongoose.ObjectId,
        required: true,
    },
    formulario: {
        type: String,
        required: false,
    },
    presupuesto_id: {
        type: mongoose.ObjectId,
        required: false,
    },
    declaracion_file: {
        type: String,
        required: false,
    },
    autorizacion_file: {
        type: String,
        required: false,
    },
    stage_id: {
        type: mongoose.ObjectId,
        required: false,
    },
    nif_file: String,
    nif_representante_file: String,
    acreditacion_file: String,

    }, { timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id
            delete ret._id
            delete ret.__v
        }
    }


    

    

})

module.exports = mongoose.model('Subvencion', schema)