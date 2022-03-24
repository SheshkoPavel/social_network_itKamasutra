import React from 'react';
import {useForm} from "react-hook-form";

const LoginForm = (props) => {


        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);


        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Login' {...register("login", {required: true})} />
                <div><input placeholder='password' {...register("password", { required: true })} /></div>
                <div><input type="checkbox" {...register("rememberMe", { required: false })}/> remember me </div>
                <input type="submit" />
            </form>
        );




/*    return (
        <form action="">
            <div>
                <input type="text" placeholder='Login'/>
            </div>

            <div>
                <input type="password" placeholder="Password"/>
            </div>

            <div>
                <input type="checkbox"/> remember me
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>
    );*/
};

export default LoginForm;