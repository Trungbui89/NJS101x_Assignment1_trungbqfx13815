const User = require("../Models/user.js")
const jwt = require("jsonwebtoken")

exports.registerUser = (req, res, next) => {
    const userName = req.body.userName
    const password = req.body.password
    const name = req.body.name
    const department = req.body.department
    const dob = req.body.dob
    const salaryScale = req.body.salaryScale
    const startDate = req.body.startDate
    const annualLeave = req.body.annualLeave
    const profilePicture = req.body.profilePicture
    const coverPicture = req.body.coverPicture
    const user = new User({
        userName: userName,
        password: password,
        name: name,
        department: department,
        dob: dob,
        salaryScale: salaryScale,
        startDate: startDate,
        annualLeave: annualLeave,
        profilePicture: profilePicture,
        coverPicture: coverPicture,
    })
    user
        .save()
        .then(result => {
            res.send("create success")
        })
        .catch(err => console.log(err))
}

exports.loginUser = (req, res, next) => {
    const {userName, password} = req.body
    // console.log(req.body)

    User.findOne({'userName': userName})
    .then((user) => {
        if(user) {
            if(password !== user.password) {
                res.status(400).json('wrong password') 
            } else {
                const token = jwt.sign({
                    userName: user.userName, id: user._id
                }, process.env.JWT_KEY, {expiresIn: '1h'})
                res.status(200).json({user: user, token: token})
            }
        } else {
            res.status(404).json('User does not exists')
        }
    })
    .catch(error => res.status(500).json({ message: error.message }))
}