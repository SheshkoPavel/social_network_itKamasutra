import React, {useState} from 'react';
import './ProfileInfo.scss';
import Preloader from "../../Common/Preloader/Preloader";
import defaultAvatar from './../../../assets/images/cat_ava.jpg'
import ProfileStatus from "./ProfileStatus";
import Button from "@mui/material/Button";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    // Если нет никакого профайла в props, то показывается Preloader
    if (!props.profile) {
        return <Preloader/>
    }

    //Смена аватара
    const onProfilePhotoSelected = (e) => {
        setEditMode(false);
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
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
                { //Кнопки для смены аватара
                    editMode === true && props.profile.userId === 22856
                    ? <div >
                        <Button variant={'text'} size={'small'} onClick={() => setEditMode(false)}>Cancel</Button>
                        <input type="file"  onChange={onProfilePhotoSelected} className={'input__file__color'} />
                    </div>
                    : null
                }

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <div className={'descriptionBlock'}>
                    <div className={'bold'}>Name: </div> {props.profile.fullName} <br/>
                    <div className={'bold'}>About: </div> {props.profile.aboutMe ? props.profile.aboutMe : 'Cool person'} <br/>

                    <div className={'underline'}>Looking for a job:</div> {props.profile.lookingForAJob === true
                    ? props.profile.lookingForAJobDescription
                    : "Yes, i want work in IT"} <br/>
                    <br/>

                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;