const mongoose = require('mongoose')

const charSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dying: { type: Boolean, required: true, dafault: false }, 
    occupation: { type: String, required: true },
    force: { type: Number, required: true, min: 0, default: 0 },
    const: { type: Number, required: true, min: 0, default: 0 },
    int: { type: Number, required: true, min: 0, default: 0 },
    carisma: { type: Number, required: true, min: 0, default: 0 },
    createdAt: { type: Date, default: Date.Now }
})

module.exports = mongoose.model('Char', charSchema)

