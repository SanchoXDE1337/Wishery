const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {registerValidation, loginValidation} = require('../validation')
// const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send('Email already exists')
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        await res.json(savedUser)
    } catch (e) {
        await res.json({message: e})
    }
})

router.post('/login', async (req, res) => {
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(400).send('Email is wrong')

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Invalid password')

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send('Logged in!')
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