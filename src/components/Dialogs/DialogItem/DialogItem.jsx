import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";

const DialogItem = (props) => {
    return (
        <div >
            <NavLink className={({isActive}) => classes.item + ` ${isActive ? classes.active : ''}`} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;