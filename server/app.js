const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStratagy = require('./middleware/passport-strategy')
const authRoutes = require('./routes/auth.routes')
// Не обязательно писать index.js по умолчанию если не укзан файл смотрит на него
const postRoutes = require('./routes/post.routes')
const commentRoutes = require('./routes/comment.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true})
.then(() => console.log('mongoDB connected....'))
.catch(error =>console.error(error))

app.use(passport.initialize())
passport.use(passportStratagy)

app.use(bodyParser.urlencoded({extened: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)

module.exports = app

