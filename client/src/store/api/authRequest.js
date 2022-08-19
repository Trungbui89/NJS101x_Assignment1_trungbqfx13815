import API from './hostCreater'

export const login = (user) => API.post('/auth/login', user)