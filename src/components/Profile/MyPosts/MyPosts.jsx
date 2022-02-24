import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    return (
        <div>
            Posts
            <div>
                <input />
                <button>Create post</button>
            </div>
            <Post message="Privet utyrok" likes={10} />
            <Post message="Нормально ты заряжаешь" likes={3} />
        </div>
    );
};

export default MyPosts;