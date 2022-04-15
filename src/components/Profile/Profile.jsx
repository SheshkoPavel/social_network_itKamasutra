import React, {useEffect} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profileReducer";

const Profile = (props) => {

    const profile = useSelector(state => state.profilePage.profile)
    const status = useSelector(state => state.profilePage.status)

    const dispatch = useDispatch()
    const getUserProfileF = (user) => {dispatch(getUserProfile(user))}
    const getStatusF = (user) => {dispatch(getStatus(user))}
    const updateStatusF = (status) => {dispatch(updateStatus(status))}
    const savePhotoF = (file) => {dispatch(savePhoto(file))}

// Check is any user id in URL. If not, push my profile
    let { userId } = useParams()

    useEffect(() => {
        let user = !!userId
            ? userId
            : 22856;
        getUserProfileF(user);
        getStatusF(user);
    }, [userId]);

    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatusF}
                         savePhoto={savePhotoF}
            />
            <MyPosts />
        </div>
    );
};

export default Profile;