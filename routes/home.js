const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({})
        await res.json(posts)
    } catch (e) {
        await res.json({message: e})
    }
})

module.exports = router