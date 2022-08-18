const express = require('express')
const { uploadImages, getImages } = require('../Controllers/filesController.js')

const router = express.Router()

router.post('/upload-images', uploadImages)

router.get('/get-images', getImages)

module.exports = router