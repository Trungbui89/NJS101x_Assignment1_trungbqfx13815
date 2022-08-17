import * as AuthApi from '../api/authRequest'

export const login = (formData) => async(dispatch) => {

    dispatch({type: 'AUTH_START'})
    try {
        const resData = await AuthApi.login(formData)
        dispatch({type: 'AUTH_SUCCESS', payload: resData.data})
    } catch (error) {
        console.log(error)
        dispatch({type: 'AUTH_FALSE'})
    }
}