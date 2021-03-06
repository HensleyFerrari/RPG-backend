const Char = require('./char')

module.exports = {
    async index(req, res) {
        const char = await Char.find({})

        return res.json(char)
    },

    async show(req, res) {
        const char = await Char.findById(req.params.id)

        return res.json(char)
    },

    async store(req, res) {
        const char = await Char.create(req.body)

        return res.json(char)
    },

    async update(req, res) {
        const char = await Char.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(char)
    },

    async destoy(req, res) {
        await Char.findByIdAndRemove(req.params.id)

        return res.send()
    }

}