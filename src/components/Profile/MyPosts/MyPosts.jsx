import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from "../AddPostForm";
import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    const posts = useSelector(state => state.profilePage.posts)

    const dispatch = useDispatch()
    const addPost = (newPostText) => {
        dispatch(addPostActionCreator(newPostText))
    }

    let postElements = posts.map((post) => (<Post message={post.message} likes={post.likesCount} key={post.id} />))

    return (
        <div className={classes.postsBlock}>
            <h3 className={classes.posts}>Posts</h3>
            <div>
                <AddPostForm addPost={addPost} />
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;