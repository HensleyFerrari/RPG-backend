const express = require ('express')

const routes = express.Router()

const CharService = require('../api/char/charService')

routes.get('/chars', CharService.index)
routes.get('/chars/:id', CharService.show)
routes.post('/chars', CharService.store)
routes.put('/chars/:id', CharService.update)
routes.delete('/chars/:id', CharService.destoy)

module.exports = routes
