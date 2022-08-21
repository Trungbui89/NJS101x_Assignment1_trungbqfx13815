import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Attendance from './Attendance'
import { addAttendance } from '../../store/action/attendanceAction'
import { reGetUser } from '../../store/action/authAction'

const AttendanceController = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.authReducer.authData.user)
    // const attendanceData = useSelector(state => state.attendanceReducer.)
    const selectItem = ['Nhà', 'Công ty', 'Khách hàng']
    const [workplace, setWorkplace] = React.useState(selectItem[1])

    const handleWorkplaceChange = (e) => {
        setWorkplace(e.target.value)
    }

    const handleAttendanceUp = async (e) => {
        await dispatch(addAttendance({
            workplace: workplace,
            _id: userData._id,
            name: userData.name
        }))
        await dispatch(reGetUser({userId: userData._id}))
    }

    const handleAttendanceDown = (e) => {
        
    }

    return (
        <Attendance 
            userData={userData}
            selectItem={selectItem}
            workplace={workplace}
            handleWorkplaceChange={handleWorkplaceChange}
            handleAttendanceUp={handleAttendanceUp}
            handleAttendanceDown={handleAttendanceDown}
        />
    )
}

export default AttendanceController
