const businessController = require('../controllers/businessController')

const express = require('express')
const businessRoutes = express.Router()


businessRoutes.get('/', businessController.getAll)
businessRoutes.post('/:id', businessController.create)
businessRoutes.get('/:id', businessController.getOne)
businessRoutes.put('/:id',businessController.update)
businessRoutes.delete('/:id',businessController.delete)
businessRoutes.post('/:id/comment/:userId', businessController.review)


module.exports = businessRoutes