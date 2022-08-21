const Attendance = require('../Models/attendance.js')
const User = require('../Models/user')

exports.addAttendance = (req, res, next) => {
    const workplace = req.body.workplace
    const startTime = new Date()
    const endTime = null
    const user = {
        userId: req.body._id,
        userName: req.body.name
    }
    const attendance = new Attendance({
        workplace: workplace,
        startTime: startTime,
        endTime: endTime,
        user: user
    })
    attendance
        .save()
        .then(result => {
            const attendanceId = result._id.toString()
            const userId = result.user.userId
            User.findById(userId)
            .then(user => {
                if(user) {
                    user.attendanceId = attendanceId
                }
                return user.save()
            })
            .then(userResult => {
                res.status(200).json({attendance: result})
            })
        })
        .catch(err => console.log(err))

}