import React, {useState} from 'react';
import classes from "./Post.module.css"

const Post = (props) => {

    const [likes, setLikes] = useState(props.likes)

    const likeUp = () => {
        setLikes((likes) => likes+1)
    }

    return (
        <div className={classes.item}>
            <img
                src="https://cf.ltkcdn.net/socialnetworking/images/orig/168646-425x425-Cat-Avatar-Primary.jpg"
                alt="avatar"
            />
            {props.message}
            <div>
                <span className={classes.likes__count}>Likes count {likes}</span>
                <button
                    className={classes.like__buttons}
                    onClick={likeUp}>
                        like it
                </button>
            </div>

        </div>
    );
};

export default Post;