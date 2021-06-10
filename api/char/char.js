const mongoose = require('mongoose')

const charSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dying: { type: Boolean, dafault: false }, 
    occupation: { type: String, required: true },
    force: { type: Number, min: 0, default: 0 },
    const: { type: Number, min: 0, default: 0 },
    int: { type: Number, min: 0, default: 0 },
    carisma: { type: Number, min: 0, default: 0 },
    createdAt: { type: Date, default: Date.Now }
})

module.exports = mongoose.model('Char', charSchema)

