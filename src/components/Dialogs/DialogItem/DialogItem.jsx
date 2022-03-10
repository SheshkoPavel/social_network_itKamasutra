import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";

const DialogItem = (props) => {
    let path = '/dialogs/';

    return (
        <div >
            <NavLink
                className={({isActive}) => classes.item + ` ${isActive ? classes.active : ''}`}
                to={path + props.id}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;