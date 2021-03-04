const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/user/signup', async (req, res) => {
    const user = new User(req.body)
    console.log(user);

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send(e)
        console.log(e);
    }
})

router.get('/user/me', auth, async(req, res) => {
    res.send(req.user)
    console.log(req.user);
})

router.post('/user/logout', (req, res) => {
    
})
module.exports = router