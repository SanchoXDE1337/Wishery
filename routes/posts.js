const express = require('express')
const router = express.Router()
const User = require('../models/User')

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


router.post('/', async (req, res) => {
    try {
        const author = (await User.findById(req.body.author)).username
        const post = new Post({
            author,
            title: req.body.title,
            description: req.body.description,
            theme: req.body.theme
        })
        await post.save()
        await res.send('Added!')
    } catch (e) {
        await res.json({message: e})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const author = (await User.findById(req.body.author)).username
        await Post.findOneAndUpdate({_id: req.params.id}, {
            author,
            title: req.body.title,
            description: req.body.description,
            theme: req.body.theme
        })
        await res.send(`Updated. id: ${req.params.id}`)
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



module.exports = router