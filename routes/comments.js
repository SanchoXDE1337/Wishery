const express = require('express')
const router = express.Router()

const Comment = require('../models/Comment')

// routers
router.get('/:id', async (req, res) => {
    try {
        const comments = await Comment.findOne({id: req.params.id})
        await res.json(comments.comments)
    } catch (e) {
        await res.json({message: e})
    }
})


router.post('/:id', async (req, res) => {
    const commentToAdd = {
        author: req.body.author,
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
            res.send('Commented!')
        } else {
            commentsInBD.comments.push(commentToAdd)
            await commentsInBD.save()
            res.send('Commented!')
        }
    } catch (e) {
        await res.json({message: e})
    }
})

module.exports = router