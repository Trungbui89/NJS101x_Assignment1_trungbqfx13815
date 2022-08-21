const attendanceReducer = ( state = {attendanceData: null, err: false, loading: false}, action) => {
    switch(action.type) {
        case 'ATTENDANCE_START':
            return {...state, loading: true}
        case 'ATTENDANCE_SUCCESS':
            return {...state, attendanceData: action.payload, loading: false}
        case 'ATTENDANCE_FAILED':
            return {...state, loading: false, err: true}
        default:
            return state
    }
}

export default attendanceReducer