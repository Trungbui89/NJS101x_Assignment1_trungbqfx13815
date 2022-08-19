import * as FileApi from '../api/fileRequest'

export const updateImage = (formData, imgType) => (dispatch) => {
    dispatch({type: 'FILE_UPLOAD_START'})
    FileApi.updateImage(formData)
        .then(result => {
            dispatch({type: 'FILE_UPLOAD_SUCCESS', payload: {...result.data, imgType: imgType}})
        })
        .catch(error => {
            console.log(error)
            dispatch({type: 'FILE_UPLOAD_FALSE'})
        })
}