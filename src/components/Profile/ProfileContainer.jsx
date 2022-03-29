import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profileReducer";
import {useMatch} from "react-router-dom";
import {compose} from "redux";

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match}/>;
};

const ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match ? props.match.params.userId : 22856;
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [props.match]);

    return (
        <Profile {...props}
                 profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 savePhoto={props.savePhoto}
        />
    );
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
)(ProfileURLMatch)

