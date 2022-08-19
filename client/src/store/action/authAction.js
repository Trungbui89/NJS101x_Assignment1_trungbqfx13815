import * as AuthApi from '../api/authRequest'

export const login = (formData) => (dispatch) => {
    dispatch({type: 'AUTH_START'})
    AuthApi.login(formData)
        .then( result => {
            dispatch({type: 'AUTH_SUCCESS', payload: result.data})
        })
        .catch ( err => {
            console.log(err)
            dispatch({type: 'AUTH_FALSE'})
        })
}

export const editUser = (formData) => (dispatch) => {
    dispatch({type: 'EDIT_USER_START'})
    AuthApi.editUser(formData)
        .then( result => {
            dispatch({type: 'EDIT_USER_SUCCESS', payload: result.data})
        })
        .catch ( err => {
            console.log(err)
            dispatch({type: 'EDIT_USER_FALSE'})
        })
}