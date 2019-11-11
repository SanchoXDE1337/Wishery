require('dotenv/config')

const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

// import routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

const authRoute = require('./routes/auth')
app.use('/user', authRoute)

//connect to db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to DB'))

app.listen(3000, () => {
    console.log('listening on port 3000')
})
