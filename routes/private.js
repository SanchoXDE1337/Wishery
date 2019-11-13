const express = require('express')
const verify = require('../verifyToken')
const User = require('../models/User')
const Post = require('../models/Post')
const router = express.Router()

router.get('/:id', verify, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const userPosts = await Post.find({ author: user.username })
        await res.json(userPosts)
    } catch (e) {
        await res.json({message: e})
    }
})

module.exports = router
