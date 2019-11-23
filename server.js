require('dotenv/config')

const express = require('express')
const server = express()
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 8080

// import routes
const postsRoute = require('./routes/posts')
server.use('/posts', postsRoute)

const authRoute = require('./routes/auth')
server.use('/user', authRoute)

const privateRoute = require('./routes/private')
server.use('/private', privateRoute)

const homeRoute = require('./routes/home')
server.use('/', homeRoute)

const commentRoute = require('./routes/comments')
server.use('/comments', commentRoute)

//connect to db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},
    () => console.log('connected to DB'))


if (process.env.NODE_ENV === 'production') {
    server.use(express.static('./client/build'))
    server.get('*', (res, req) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})