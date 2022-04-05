import React from 'react';
import HeaderComponent from "./Header.component";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

const HeaderContainer = (props) => {
    return (
        <HeaderComponent {...props} />
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {
    logout
})(HeaderContainer);