import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from "../AddPostForm";


const MyPosts = (props) => {

    let postElements = props.posts.map((post) => (<Post message={post.message} likes={post.likesCount} key={post.id} />))

    return (
        <div className={classes.postsBlock}>
            <h3>Posts</h3>
            <div>
                <AddPostForm addPost={props.addPost} />

{/*                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <br/>
                <button onClick={ onAddPost }>Create post</button>*/}
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;