import API from './hostCreater'

export const addAttendance = (payload) => API.post('/attendance/add-attendance', payload)