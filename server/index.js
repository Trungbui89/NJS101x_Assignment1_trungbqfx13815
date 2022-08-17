const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const AuthRoute = require('./Routes/AuthRoute.js')

// Routes
const app = express()

// Middleware
app.use(bodyParser.json({extended: false}))
app.use(bodyParser.urlencoded({extended: false}))

dotenv.config()

// Connect to database
mongoose.connect(
    process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => app.listen(process.env.PORT, () => console.log(`listening at ${process.env.PORT}`)))
.catch((err) => console.log(err))

// Use routes
app.use('/auth', AuthRoute)