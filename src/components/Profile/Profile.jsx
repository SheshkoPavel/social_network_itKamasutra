import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {useSelector} from "react-redux";

const Profile = (props) => {

    const profile = useSelector(state => state.profilePage.profile)
    const status = useSelector(state => state.profilePage.status)



    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
            />
            <MyPosts />
        </div>
    );
};

export default Profile;