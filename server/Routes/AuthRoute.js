const express = require('express')
const { loginUser, registerUser, postEditUser } = require('../Controllers/AuthController.js')

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

router.post('/edit_user', postEditUser)

module.exports = router