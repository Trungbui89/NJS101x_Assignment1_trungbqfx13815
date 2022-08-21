import * as AttendanceApi from '../api/attendanceRequest'

export const addAttendance = (formData) => (dispatch) => {
    dispatch({type: 'ATTENDANCE_START'})
    AttendanceApi.addAttendance(formData)
        .then(result => {
            dispatch({type: 'ATTENDANCE_SUCCESS', payload: result.data.attendance})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: 'ATTENDANCE_FAILED'})
        })
}