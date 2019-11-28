const express = require('express')
const verify = require('../verifyToken')
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcryptjs')
const router = express.Router()

router.get('/:id', verify, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const userPosts = await Post.find({author: user.username})
        await res.json(userPosts)
    } catch (e) {
        await res.json({message: e})
    }
})

router.put('/settings/:id', verify, async (req, res) => {
    try {
        await User.findOneAndUpdate({_id: req.params.id}, {
            info: {
                imgUrl: req.body.imgUrl,
                age: req.body.age,
                contacts: {
                    telegram: req.body.telegram,
                    vk: req.body.vk,
                    instagram: req.body.instagram
                }
            }
        })
        await res.send(`Updated!`)
    } catch (e) {
        await res.json({message: e})
    }
})

router.put('/settings/changepass/:id', verify, async (req, res) => {
    const user = await User.findById(req.params.id)
    const validPass = await bcrypt.compare(req.body.oldPass, user.password)
    if (!validPass) return res.status(400).send("Invalid old password")
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.newPass, salt)
        await User.findOneAndUpdate({_id: req.params.id}, {
            password: hashedPassword
        })
        await res.send(`Updated!`)
    } catch (e) {
        await res.status(400).send("Something goes wrong!")
    }
})

module.exports = router
