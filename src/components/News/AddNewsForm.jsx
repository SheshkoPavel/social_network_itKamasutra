import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addNewNewsThunk} from "../../redux/newsReducer";
import "./AddNewsForm.scss"

const AddNewsForm = () => {

    const dispatch = useDispatch()
    const addNewNews = (data) => {
        dispatch(addNewNewsThunk(data))
    }

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => addNewNews(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'form__layout'}>
            <textarea className={'text__area'}
                      placeholder="Write text for new News"
                      {...register("newsText", {required: true})} />
            <div className={'error__form__validation'}>
                {errors.newsText?.type === 'required' && "You must write something"}
            </div>

            <input className={'input__area'}
                   placeholder='Insert URL'
                   {...register('imageURL', {required: true})}  />
            <div className={'error__form__validation'}>
                {errors.imageURL?.type === 'required' && "You must write something"}
            </div>

            <input type="submit" />
        </form>
    );
};

export default AddNewsForm;