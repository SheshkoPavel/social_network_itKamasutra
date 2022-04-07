import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addNewNewsThunk} from "../../redux/newsReducer";

const AddNewsForm = () => {

    const dispatch = useDispatch()
    const addNewNews = (data) => {
        dispatch(addNewNewsThunk(data))
    }

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => addNewNews(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea style={{width: 300, height: 50}} placeholder="Write text for new News" {...register("newsText", {required: true})} />
            <div style={{color: "rebeccapurple"}}>{errors.newsText?.type === 'required' && "You must write something"}</div>

            <input style={{width: 300}} placeholder='Insert URL' {...register('imageURL', {required: true})}  />
            <div style={{color: "rebeccapurple"}}>{errors.imageURL?.type === 'required' && "You must write something"}</div>

            <input type="submit" />
        </form>
    );
};

export default AddNewsForm;