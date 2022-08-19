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