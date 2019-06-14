const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.routes')
// Не обязательно писать index.js по умолчанию если не укзан файл смотрит на него
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI)
.then(() => console.log('mongoDB connected....'))
.catch(error =>console.error(error))

app.use(bodyParser.urlencoded({extened: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

module.exports = app

