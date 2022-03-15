import React, {useRef} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.posts.map((post) => (<Post message={post.message} likes={post.likesCount} key={post.id} />))

    const newPostElement = useRef(null);

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={classes.postsBlock}>
            <h3>Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <br/>
                <button onClick={ onAddPost }>Create post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;