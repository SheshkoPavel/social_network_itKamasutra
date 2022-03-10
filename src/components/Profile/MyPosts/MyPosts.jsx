import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.state.posts.map((post) => (<Post message={post.message} likes={post.likesCount} />))

    return (
        <div className={classes.postsBlock}>
            <h3>Posts</h3>
            <div>
                <textarea></textarea>
                <br/>
                <button>Create post</button>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
    );
};

export default MyPosts;