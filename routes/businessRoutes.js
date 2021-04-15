const businessController = require('../controllers/businessController')

const express = require('express')
const businessRoutes = express.Router()

businessRoutes.get('/', businessController.getAll)
businessRoutes.post('/', businessController.getAll)




module.exports = businessRoutes