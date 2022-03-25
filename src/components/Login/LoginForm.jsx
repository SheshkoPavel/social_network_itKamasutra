import React from 'react';
import {useForm} from "react-hook-form";


const LoginForm = (props) => {


        const { register, handleSubmit, formState: { errors } } = useForm({});
        const onSubmit = data => {
            props.login(data.email, data.password, data.rememberMe);

        }


        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='email' {...register("email", {required: true})} />
                <div style={{color: "rebeccapurple"}}>{errors.email?.type === 'required' && "You must enter a email"}</div>

                <div><input placeholder='password' type='password' {...register("password", { required: true })} /></div>
                <div style={{color: "rebeccapurple"}}>    {errors.password?.type === 'required' && "You must enter a password"} </div>

                <div ><input type="checkbox" {...register("rememberMe", { required: false })}/> remember me </div>
                <input type="submit" />
            </form>
        );

};

export default LoginForm;