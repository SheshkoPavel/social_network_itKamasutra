import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {Navigate, useMatch} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId);

    }

    render() {
        if (this.props.isAuth === false) {
            return  <Navigate to="/login" />
        };

        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }

};

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />;
}

let AuthRedirectContainer = (props) => {
    return <ProfileContainer {...props} />
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getUserProfile })(ProfileURLMatch);