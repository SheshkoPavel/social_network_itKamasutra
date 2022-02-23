import React from 'react';
import "./Profile.css";

const Profile = () => {
    return (
        <div className="grid__profile">
            <div className="profile__img">
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="Content image"/>
            </div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU"
                    alt="avatar"/>
                Description
            </div>
            <div>
                Posts
                <div>
                    New Post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;