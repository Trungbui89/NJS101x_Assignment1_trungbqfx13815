import * as AttendanceApi from '../api/attendanceRequest'
import { reGetUser } from './authAction'

export const addAttendance = (formData, userData) => (dispatch) => {
    dispatch({type: 'ATTENDANCE_START'})
    AttendanceApi.addAttendance(formData)
        .then(result => {
            dispatch({type: 'ATTENDANCE_SUCCESS', payload: result.data.attendance})
        })
        .then(() => {
            dispatch(reGetUser({userId: userData._id}))
        })
        .catch(err => {
            console.log(err)
            dispatch({type: 'ATTENDANCE_FAILED'})
        })
}