import { Box } from '@mui/material';
import React from 'react';
import './Login.scss';

const LoginView = () => {
    const [data, setData] = React.useState({userName: '', password: ''})

    const handleChangeUser = (key, value) => {
        switch (key) {
            case 'username':
                setData({...data, userName: value.toLowerCase()});
                break;
            case 'password':
                setData({...data, password: value});
                break;
            default:
                break;
        }
    }

    const postLogin = (e) => {
        e.preventDefault()
    }

    return (
        <Box className='box-login-page'>
            <div class="login-container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login">
                            <div class="login__field">
                                <input 
                                    type="text" 
                                    class="login__input" 
                                    placeholder="User name / Email" 
                                    onChange={(e) => handleChangeUser('username', e.target.value)}
                                />
                            </div>
                            <div class="login__field">
                                <input 
                                    type="password" 
                                    class="login__input" 
                                    placeholder="Password" 
                                    onChange={(e) => handleChangeUser('password', e.target.value)}
                                />
                            </div>
                            <button class="button login__submit" onClick={postLogin}>
                                <span class="button__text">Log In Now</span>
                            </button>				
                        </form>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>		
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>
        </Box>
    );
};

export default LoginView;
