import React from 'react';
import {useForm} from "react-hook-form";

const AddMessageForm = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => onSendMessageClick(data);

    const onSendMessageClick = (data) => {
        props.sendMessage(data.newMessageBody);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Write smth" {...register("newMessageBody", {required: true})} />
            <input type="submit" />
        </form>
    );
};

export default AddMessageForm;