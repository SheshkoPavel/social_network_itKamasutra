import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://i.yapx.ru/RGJru.jpg"
                    alt="main content"
                    style={{width: "100%", height: 350}}
                />
            </div>
            <div className={classes.descriptionBlock}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU"
                    alt="avatar"
                    style={{borderRadius: 80}}
                />
                Description
            </div>
        </div>
    );
};

export default ProfileInfo;