const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    etapa_description: {
        type: String,
        required: true,
        value: 'Estudio Solar/Presupuesto' | 'Pago Reserva' | 'Memoria técnica' | 'Comunicación de Obra' | 'Compra de material' | 'Instalación' | 'Subvención' | 'Bonificación IBI'
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

module.exports = mongoose.model('Etapa_type', schema)