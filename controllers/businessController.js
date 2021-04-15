const models = require('../models')
const axios = require('axios')
const businessController = {}


const businessController = {}
businessController.getAll = async (req,res) => {
    try {
        let business = await model.business.findAll()
        res.json({business})  
        
    } catch (error) {
        res.json({error})
    }
}



businessController.create = async (req,res) => {
    try {

        let user = await model.user.findOne({
            where: {
                id: req.params.id
            }
        })

        let newBusiness = await model.post.create({

        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        type: req.body.type,
        img: req.body.img
    
        })
        user.addBusiness(newBusiness)
        res.json({business}) 
    } catch (error) {
        res.json({error})
    }
}


module.exports = businessController
