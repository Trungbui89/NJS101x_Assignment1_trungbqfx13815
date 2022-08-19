import API from './hostCreater'

export const updateAvatar = (data) => API.post('/upload-images', data)