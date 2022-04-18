import React from 'react';
import {useForm} from "react-hook-form";

const LoginForm = (props) => {

        const { register, handleSubmit, formState: { errors } } = useForm({});
        // При нажатии на кнопку submit получается объект с зарегистрированнными полями
        const onSubmit = data => {
            props.login(data.email, data.password, data.rememberMe, data.captcha);
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='email' {...register("email", {required: true})} />
                <div style={{color: "rebeccapurple"}}>{errors.email?.type === 'required' && "You must enter a email"}</div>

                <div><input placeholder='password' type='password' {...register("password", { required: true })} /></div>
                <div style={{color: "rebeccapurple"}}>    {errors.password?.type === 'required' && "You must enter a password"} </div>

                <div ><input type="checkbox" {...register("rememberMe", { required: false })}/> remember me </div>

                { //Если с сервера приходит captcha, то показываем её
                        props.captcha ? <div>   <br/>
                                                <img src={props.captcha.captcha} alt={'captcha'} /><br/>
                                                Please, enter the captcha <br/>
                                                <input type="text" {...register("captcha", {required: true})} />
                                                <div style={{color: "rebeccapurple"}}> {errors.captcha?.type === 'required' && "You must enter a captcha"} </div>
                                        </div>
                                        : null
                }
                    <input type="submit" />
            </form>
        );
};

export default LoginForm;