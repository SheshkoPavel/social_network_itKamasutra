import React, {useRef} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.state.posts.map((post) => (<Post message={post.message} likes={post.likesCount}/>))

    const newPostElement = useRef(null);
    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }


    return (
        <div className={classes.postsBlock}>
            <h3>Posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
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