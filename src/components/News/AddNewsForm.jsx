import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addNewNewsThunk} from "../../redux/newsReducer";
import "./AddNewsForm.scss"
import {Input} from "@mui/material";

const AddNewsForm = ({setActive}) => {

    const dispatch = useDispatch()
    //Добавляем новость и закрываем модальное окно
    const addNewNews = (data) => {
        dispatch(addNewNewsThunk(data));
        setActive(false);
    }

    //Настройка формы
    const { register, handleSubmit, formState: { errors } } = useForm()
    //При нажатии на кнопку отправить формируется объект data с зарегистрированными полями (newsText, imageURL)
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

            <Input type="submit" value={'SEND'} className={'send__btn'} />
        </form>
    );
};

export default AddNewsForm;