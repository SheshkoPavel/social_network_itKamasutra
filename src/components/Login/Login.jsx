import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import  {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    captcha: state.auth.captcha
});

const Login = (props) => {

    if (!props.isAuth) {
    return (
        <div>
            <h1>Login please</h1>
            <LoginForm login={props.login} captcha={props.captcha} />
        </div>
    );
    }
    return <Navigate to={'/profile/22856'}/>
};



export default connect(mapStateToProps, {login})(Login);