import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    const onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return (
                        <MyPosts
                            updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={store.getState().profilePage.posts}
                            newPostText={store.getState().profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;