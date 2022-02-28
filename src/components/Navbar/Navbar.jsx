import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.grid__nav}>
            <NavLink className={({isActive}) => classes.item + ` ${isActive ? classes.active : ''}`} to="/profile">Profile</NavLink>
            <NavLink className={({isActive}) => classes.item + ` ${isActive ? classes.active : ''}`} to="/dialogs">Messages</NavLink>
            <NavLink className={({isActive}) => classes.item + ` ${isActive ? classes.active : ''}`} to="/news">News</NavLink>
            <NavLink className={({isActive}) => classes.item + ` ${isActive ? classes.active : ''}`} to="/music">Music</NavLink>
            <NavLink className={({isActive}) => classes.item + ` ${isActive ? classes.active : ''}`} to="/settings">Settings</NavLink>
        </nav>
    );
};

export default Navbar;