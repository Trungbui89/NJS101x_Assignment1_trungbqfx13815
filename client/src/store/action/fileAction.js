import * as FileApi from '../api/fileRequest'

export const updateAvatar = (formData) => (dispatch) => {
    dispatch({type: 'FILE_UPLOAD_START'})
        FileApi.updateAvatar(formData)
        .then(result => {
            dispatch({type: 'FILE_UPLOAD_SUCCESS', payload: result.data})
        })
        .catch(error => {
            console.log(error)
            dispatch({type: 'FILE_UPLOAD_FALSE'})
        })
}