import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div >
            <NavLink className={({isActive}) => classes.item + ` ${isActive ? classes.active : ''}`} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) =>{
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog__Items}>
                <DialogItem name="Paul" id="1" />
                <DialogItem name="Den" id="2" />
                <DialogItem name="Petr" id="3" />
                <DialogItem name="Viktor" id="4" />

            </div>

            <div className={classes.messages}>
                <Message message='Hi' />
                <Message message='Hello' />
                <Message message='How are you?' />
            </div>
        </div>
    );
};

export default Dialogs;