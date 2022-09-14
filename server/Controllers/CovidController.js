// const mongoose = require('mongoose')
const Covid = require('../Models/covid.js')
const User = require('../Models/user')

addCovidData = (req, res) => {
    User.findById(req.body.userId)
        .then(userId => {
            const date = req.body.date
            const temperature = req.body.temperature
            const covid = new Covid ({
                date: date,
                temperature: temperature,
                userId: userId
            })
        
            covid
                .save()
                .then(result => {
                    res.status(200).json({ temperature: result })
                })
                .catch(err => res.status(500).json({ message: err }))
        })
        .catch(() => res.status(501).json({ message: 'User không tồn tại' }))
}

exports.registerCovid = (req, res, next) => {
    const date = req.body.date
    let startDate = new Date(date)
        startDate.setSeconds(0)
        startDate.setHours(0)
        startDate.setMinutes(0)

    let dateMidnight = new Date(date)
        dateMidnight.setHours(23)
        dateMidnight.setMinutes(59)
        dateMidnight.setSeconds(59)

    Covid.findOne({date: { $gte: startDate, $lte: dateMidnight }})
    .then(result => {
        if(!result || result.length <= 0) {
            addCovidData(req, res)
        } else {
            res.status(403).json({ message: result.date })
        }
    })
    .catch(err => console.log(err))
}