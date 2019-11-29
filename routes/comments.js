const express = require('express')
const router = express.Router()
const User = require('../models/User')
const verify = require('../verifyToken')
const Comment = require('../models/Comment')

// routers
router.get('/:id', async (req, res) => {
    try {
        const comments = await Comment.findOne({id: req.params.id})
        await res.json(comments.comments)
    } catch (e) {
        await res.send(null)
    }
})


router.post('/:id', verify, async (req, res) => {
    const author = (await User.findById(req.body.authorID)).username
    const commentToAdd = {
        author,
        authorID: req.body.authorID,
        text: req.body.text,
    }
    try {
        const commentsInBD = await Comment.findOne({id: req.params.id})
        if (!commentsInBD) {
            const comment = new Comment({
                id: req.params.id,
                comments: [commentToAdd]
            })
            await comment.save()
            res.send(comment.comments[0])
        } else {
            commentsInBD.comments.push(commentToAdd)
            await commentsInBD.save()
            res.send(commentsInBD.comments[commentsInBD.comments.length - 1])
        }
    } catch (e) {
        await res.json({message: e})
    }
})

module.exports = router;