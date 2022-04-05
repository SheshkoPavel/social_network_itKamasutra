import React from 'react';
import LoginForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import  {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";


const Login = (props) => {

    const isAuth = useSelector(state => state.auth.isAuth)
    const captcha = useSelector(state => state.auth.captcha)

    const dispatch = useDispatch()
    const loginFunction = (email, password, rememberMe, captcha) => {
        dispatch(login(email, password, rememberMe, captcha))
    }

    if (!isAuth) {
    return (
        <div>
            <h1>Login please</h1>
            <LoginForm login={loginFunction} captcha={captcha} />
        </div>
    );
    }
    return <Navigate to={'/profile/22856'}/>
};

export default Login;