const models = require('../models')
const axios = require('axios')
const businessController = {}



businessController.getAll = async (req,res) => {
    try {
        let business = await models.business.findAll()
        res.json({business})  
        
    } catch (error) {
        res.json({error})
    }
}

businessController.getOne = async(req,res) => {
    try {
        let business = await models.business.findOne({
            where: {
                id: req.params.id
            }
        })

        res.json({business})
    } catch (error) {
        res.json({error})
    }
}

businessController.create = async (req,res) => {
    try {

        let user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
   
        let newBusiness = await models.business.create({
            name: req.body.name,
            address: req.body.address,
            description: req.body.description,
            type: req.body.type,
            img: req.body.img
  
        })

        user.addBusiness(newBusiness)
      
        res.json({user, newBusiness}) 
    } catch (error) {
        res.json({error})
    }
}

businessController.update = async (req,res) => {
    
    try {
        let business = await models.business.findOne({
            where: {
                id: req.params.id
            }
        })
        let updates = await business.update(req.body)
        res.json({updates})
    } catch (error) {
        res.json({error})
    }
}

businessController.delete = async(req,res) => {
    try {
        let business = await models.business.findOne({
            where: {
                id: req.params.id
            }
        })
        await business.destroy()

        res.json({ message: 'business deleted'}) 
    } catch (error) {
        res.json({error})
    }
}

businessController.review = async (req,res) => {
    let business = await models.business.findOne({
        where: {
            id: req.params.id
        }
    })

    let user = await models.user.findOne ({
        where: {
            id: req.params.userId
        }
    })

    let review = await models.review.create({
        headline: req.body.headline,
        content: req.body.content,
        rating: req.body.rating,
        userId: user.id,
        businessId: business.id
    })

    res.json({business, user, review})

}


module.exports = businessController
