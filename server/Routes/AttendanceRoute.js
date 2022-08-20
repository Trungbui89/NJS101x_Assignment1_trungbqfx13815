const express = require('express')
const { addAttendance } = require('../Controllers/AttendanceController.js')

const router = express.Router()

router.post('/add-attendance', addAttendance)

module.exports = router