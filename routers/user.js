const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/user', (req, res) => {
    const user = new User(req.body)

    try {
        user.save().then((req, res) => {
            console.log(res);
        }).catch(e => {
            console.log(e);
        })
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router