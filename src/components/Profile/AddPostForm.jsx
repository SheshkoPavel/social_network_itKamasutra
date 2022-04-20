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
            <textarea placeholder="Write smth"
                      {...register("newPostText", {required: true})}
                style={{resize: 'none', width: 300, height: 80}}

            />
            <div style={{color: "rebeccapurple"}}>{errors.newPostText?.type === 'required' && "You must write something"}</div>

            <input type="submit" />
        </form>
    );
};

export default AddPostForm;