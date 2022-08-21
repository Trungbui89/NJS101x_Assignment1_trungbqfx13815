import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Attendance from './Attendance'
import { addAttendance } from '../../store/action/attendanceAction'

const AttendanceController = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.authReducer.authData.user)
    const attendanceData = useSelector(state => state.attendanceReducer)
    const selectItem = ['Nhà', 'Công ty', 'Khách hàng']
    const [workplace, setWorkplace] = React.useState(selectItem[1])

    const handleWorkplaceChange = (e) => {
        setWorkplace(e.target.value)
    }

    const handleAttendanceUp = (e) => {
        dispatch(addAttendance({
            workplace: workplace,
            _id: userData._id,
            name: userData.name
        }, userData))
    }

    const handleAttendanceDown = (e) => {
        
    }

    return (
        <Attendance 
            userData={userData}
            attendanceData={attendanceData}
            selectItem={selectItem}
            workplace={workplace}
            handleWorkplaceChange={handleWorkplaceChange}
            handleAttendanceUp={handleAttendanceUp}
            handleAttendanceDown={handleAttendanceDown}
        />
    )
}

export default AttendanceController
