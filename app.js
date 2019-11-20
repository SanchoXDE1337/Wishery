require('dotenv/config')

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.json())
app.use(cors())

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

app.listen(8080, () => {
    console.log('listening on port 8080')
})