const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {registerValidation, loginValidation} = require('../validation')
const jwt = require('jsonwebtoken')
const verify = require('../verifyToken')


router.post('/register', async (req, res) => {
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const usernameExist = await User.findOne({username: req.body.username})
    if (usernameExist) return res.status(400).send("Username already exists")

    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send("Email already exists");

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        await user.save()
        await res.send('Registered!')
    } catch (e) {
        await res.json({message: e})
    }
})

router.post('/login', async (req, res) => {
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let user
    const userEmail = await User.findOne({email: req.body.name})
    if(!userEmail) {
        const userName = await User.findOne({username: req.body.name})
        if(!userName) {
            return res.status(400).send("Email or username is wrong")
        } else {
            user = userName
        }
    } else {
        user = userEmail
    }

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send("Invalid password")

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, { expiresIn: '30m'})
    res.header('auth-token', token).send([token, user._id])
})

router.get('/isAuth', verify, async (req, res) => {
    res.send(true)
})

module.exports = router;