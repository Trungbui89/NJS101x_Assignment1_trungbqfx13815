import API from './hostCreater'

export const login = (user) => API.post('/auth/login', user)

export const editUser = (user) => {console.log(user); return API.post('/auth/edit_user', user)}

export const getUser = (payload) => {console.log(payload); return API.post('/auth/get_user', payload)}