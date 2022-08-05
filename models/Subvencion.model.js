const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    account_id: {
        type: mongoose.ObjectId,
        required: false,
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
    acreditacion_file: String,
    tramite_number: String,
    ccaa: String,
    presentacionDate: Date,
    comission: String,
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