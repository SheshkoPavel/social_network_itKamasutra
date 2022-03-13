import React, {useRef} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";



const MyPosts = (props) => {

    let postElements = props.posts.map((post) => (<Post message={post.message} likes={post.likesCount} />))

    const newPostElement = useRef(null);

    const addPost = () => {
        props.dispatch( addPostActionCreator() );
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch( action );
    }


    return (
        <div className={classes.postsBlock}>
            <h3>Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <br/>
                <button onClick={addPost}>Create post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;