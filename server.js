require('dotenv/config')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8080

// import routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

const authRoute = require('./routes/auth')
app.use('/user', authRoute)

const privateRoute = require('./routes/private')
app.use('/private', privateRoute)

const homeRoute = require('./routes/home')
app.use('/', homeRoute)

const commentRoute = require('./routes/comments')
app.use('/comments', commentRoute)

//connect to db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},
    () => console.log('connected to DB'))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

// Handle React routing, return all requests to React app
app.get('*', (request, response) => {
    response.sendFile(path.resolve('./client/build/', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})