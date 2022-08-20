const authReducer = (state = {authData: null, loading: false, error: false, loginState: false}, action) => {
    switch(action.type) {
        case 'AUTH_START':
            return{...state, loading: true, error: false}
        case 'AUTH_SUCCESS':
            // localStorage.setItem('profile', JSON.stringify({...action?.payload}))
            return{...state, authData: action.payload, loading: false, error: false, loginState: true}
        case 'AUTH_FALSE':
            return{...state, loading: false, error: true}
        // edit user
        case 'EDIT_USER_START':
            return{...state, loading: true, error: false}
        case 'EDIT_USER_SUCCESS':
            // localStorage.setItem('profile', JSON.stringify({...action?.payload}))
            return{...state, authData: action.payload, loading: false, error: false}
        case 'EDIT_USER_FALSE':
            return{...state, loading: false, error: true}
        // logout
        case 'AUTH_LOGOUT':
            // localStorage.removeItem('profile')
            return{authData: null, loading: false, error: false, loginState: false}
        default:
            return state
    }
}

export default authReducer