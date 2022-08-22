const express = require('express')
const { addAttendance, getAttendanceInfo, endAttendance } = require('../Controllers/AttendanceController.js')

const router = express.Router()

router.post('/add-attendance', addAttendance)

router.post('/get-attendance', getAttendanceInfo)

router.post('/end-attendance', endAttendance)

module.exports = router