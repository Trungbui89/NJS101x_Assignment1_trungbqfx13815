import API from './hostCreater'

export const login = (user) => API.post('/auth/login', user)

export const editUser = (user) => API.post('/auth/edit_user', user)