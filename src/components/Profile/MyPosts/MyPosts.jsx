import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    return (
        <div className={classes.postsBlock}>
            <h3>Posts</h3>
            <div>
                <textarea></textarea>
                <br/>
                <button>Create post</button>
            </div>
            <div className={classes.posts}>
                <Post message="Privet utyrok" likes={10}/>
                <Post message="Нормально ты заряжаешь" likes={3}/>
            </div>
        </div>
    );
};

export default MyPosts;