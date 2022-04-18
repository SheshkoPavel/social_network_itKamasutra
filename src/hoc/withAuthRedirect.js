import {Navigate} from "react-router-dom";
import React from 'react';
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

    //Получаем из state true/false (залогинен, или нет)
    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    });

    class RedirectComponent extends React.Component {
        //Если false, то редиректим на login page
        render (){
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}