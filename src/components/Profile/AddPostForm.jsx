import React from 'react';
import {useForm} from "react-hook-form";

const AddPostForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => onAddPost(data);

    const onAddPost = (data) => {
        props.addPost(data.newPostText);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea placeholder="Write smth" {...register("newPostText", {required: true})} />
            {errors.newPostText?.type === 'required' && "You must write something"}
            <br/>
            <input type="submit" />
        </form>
    );
};

export default AddPostForm;