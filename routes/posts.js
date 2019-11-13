const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

// routers
router.get('/:id', async (req, res) => {
    try {
        const posts = await Post.findById(req.params.id)
        await res.json(posts)
    } catch (e) {
        await res.json({message: e})
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({})
        await res.json(posts)
    } catch (e) {
        await res.json({message: e})
    }
})

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        await res.json(savedPost)
    } catch (e) {
        await res.json({message: e})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({
            _id: req.params.id
        })
        await res.json(removedPost)
    } catch (e) {
        await res.json({message: e})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updated = await Post.findByIdAndUpdate({_id: req.params.id}, req.body)
        await res.json(updated)
    } catch (e) {
        await res.json({message: e})
    }
})

module.exports = router