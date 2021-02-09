const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/user/signup', (req, res) => {
    const user = new User(req.body)

    console.log(user);

    try {
        user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
        console.log(e);
    }
})
module.exports = router