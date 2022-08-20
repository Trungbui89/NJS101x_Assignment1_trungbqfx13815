import React from 'react'
import { useSelector } from 'react-redux'
import Attendance from './Attendance'

const AttendanceController = () => {
    const userData = useSelector((state) => state.authReducer.authData.user)

    return (
        <Attendance 
            userData={userData}
        />
    )
}

export default AttendanceController
