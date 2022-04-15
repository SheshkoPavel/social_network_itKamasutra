import React, {useState} from 'react';
import './ProfileInfo.scss';
import Preloader from "../../Common/Preloader/Preloader";
import defaultAvatar from './../../../assets/images/cat_ava.jpg'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onProfilePhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
        setEditMode(false);
    }

    return (
        <div className={'profile_content'}>

            <div >
                <img
                    src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar}
                    alt={`user avatar ${props.profile.userId}`}
                    className={'avatar__large'}
                    onDoubleClick={() =>{setEditMode(true)} }
                />
                { editMode === true && props.profile.userId === 22856
                    ? <div ><input type="file"  onChange={onProfilePhotoSelected}  /></div>
                    : null
                }

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <div className={'descriptionBlock'}>
                    <div className={'bold'}>Name: </div> {props.profile.fullName} <br/>
                    <div className={'bold'}>About: </div> {props.profile.aboutMe ? props.profile.aboutMe : 'Cool person'} <br/>

                    <div className={'underline'}>Looking for a job:</div> {props.profile.lookingForAJob === true
                    ? props.profile.lookingForAJobDescription
                    : "Yes, i want work in IntexSoft"} <br/>
                    <br/>

                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;