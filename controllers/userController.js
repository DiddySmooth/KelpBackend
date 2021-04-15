const models = require('../models')

const userController = {}

userController.create = async(req,res) => {
    try {
        const user = await models.user.create ({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({message: 'user created', user})
    } catch (error) {
        res.status(400)
        res.json({error: 'email is already taken'})
    }
}


userController.login = async(req,res) => {
    const user = await models.user.findOne({
        where: {
            email: req.body.email,
        }
    }) 
    if (user.password === req.body.password) {
        res.status(200)
        res.json({id: user.id, name: user.name})
    } else {
        res.status(400)
        res.json({error: 'invalid password'})
    }
}

userController.delete = async(req,res) => {
    try {
        let user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        await user.destroy()

        res.json({ message: 'user deleted'}) 
    } catch (error) {
        res.json({error})
    }
}

userController.update = async(req,res) => {
    try {
        let user = await models.user.findOne({
            where: {
                id: req.params.id
            }
         }) 
        let updates = await user.update(req.body)
        res.json({updates})

    } catch (error) {
        res.json({error})
    }
}







module.exports = userController