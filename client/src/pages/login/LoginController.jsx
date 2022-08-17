import React, { useState } from 'react'
import LoginView from './Login'
import { useDispatch } from 'react-redux';


const Login = (props) => {
    const { setLoading, loginSuccess } = props;
    const [user, setUser] = useState({ username: '', password: '' });
    const handleLogin = () => {
        setLoading(true)
    }

    const handleKeyEnter = (e) => {
        if(e.key === 'Enter') {
            handleLogin()
        }
    }

    return (
        <LoginView 
            postLogin={handleLogin} 
            setUser={setUser} 
            user={user} 
            handleKeyEnter={handleKeyEnter}
        />
    );
};

export default Login;
