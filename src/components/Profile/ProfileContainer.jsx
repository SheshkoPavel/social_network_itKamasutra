import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect, useDispatch} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {

    const dispatch = useDispatch()
    const getUserProfileF = (user) => {
        dispatch(getUserProfile(user))
    }
    const getStatusF = (user) => {
        dispatch(getStatus(user))
    }
    const updateStatusF = (status) => {
        dispatch(updateStatus(status))
    }
    const savePhotoF = (file) => {
        dispatch(savePhoto(file))
    }

// Check is any user id in URL. If not, push my profile
    let { userId } = useParams()
    console.log (userId)

    useEffect(() => {
        let user = !!userId
            ? userId
            : 22856;
        getUserProfileF(user);
        getStatusF(user);
    }, [userId]);

    return (
        <Profile {...props}
                 updateStatus={updateStatusF}
                 savePhoto={savePhotoF}
        />
    );
};


export default ProfileContainer;
