const express = require('express')
const router = express.Router()

const User = require('../models/User')

const Joi = require('@hapi/joi')
const schema = {
    username: Joi.string().min(5).required(),
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6).required()
}

router.post('/register', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedUser = await user.save()
        await res.json(savedUser)
    } catch (e) {
        await res.json({message: e})
    }
})


/*// routers
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

router.patch('/:id', async (req, res) => {
    try {
        const updated = await Post.updateOne(
            {_id: req.params.id},
            {$set: {title: req.body.title, description: req.body.description}}
        )
        await res.json(updated)
    } catch (e) {
        await res.json({message: e})
    }
})*/

module.exports = router