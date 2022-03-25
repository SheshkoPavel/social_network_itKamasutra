import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import defaultAvatar from './../../../assets/images/cat_ava.jpg'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>

            <div >
                <img
                    src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar}
                    alt="avatar"
                    style={{borderRadius: 80, width: 150}}
                />

                <ProfileStatus status={'Hello'} />

                <div className={classes.descriptionBlock}>
                    Name: {props.profile.fullName} <br/>
                    About: {props.profile.aboutMe} <br/>
                    Contacts:

                    facebook: {props.profile.contacts.facebook} <br/>
                    website: {props.profile.contacts.website} <br/>
                    VK: {props.profile.contacts.vk} <br/>
                    twitter: {props.profile.contacts.twitter} <br/>
                    instagram: {props.profile.contacts.instagram} <br/>
                    youtube: {props.profile.contacts.youtube} <br/>
                    github: {props.profile.contacts.github} <br/>
                    mainLink: {props.profile.contacts.mainLink} <br/><br/>
                    Looking for a job: {props.profile.lookingForAJob === true
                        ? props.profile.lookingForAJobDescription
                        : "Yes, i want work in IntexSoft"} <br/>
                    <br/>


                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;