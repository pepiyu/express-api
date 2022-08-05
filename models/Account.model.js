const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    createdBy: String,
    updatedBy: String,
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    cif_number: String,
    address: {
        type: String,
        required: false,
    },
    contact_id: mongoose.ObjectId,
    image: {
        type: String, 
        required: false,
    },
    cups_number: {
        type: String,
        required: false,
    },
    referencia_catastral: String,
    consumption_yearly: {
        type: Number,
        required: false,
    },
    comission_percentage: {
        type: Number,
        required: false,
    },
    activity_description: {
        type: String,
        required: false,
    },
    tension: {
        type: String,
        required: false,
    },
    representation: {
        type: String,
        required: false,
    },
    project_file: {
        type: String,
        required: false,
    },
    memoria_file: {
        type: String, 
        required: false,
    },
    CIE_file: String,
    nif_file: String,
    nif_representante_file: String,
    factura_file: String,
    account_type: String,
    forma_pago: {
        type: String, 
        required: false,
    },
    autorizacion_file: String,

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