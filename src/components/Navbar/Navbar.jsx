import React from 'react';
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.grid__nav}>
            <a className={classes.item} href="/profile">Profile</a>
            <a className={`${classes.item} ${classes.active}`} href="/dialogs">Messages</a>
            <a className={classes.item} href="/news">News</a>
            <a className={classes.item} href="/music">Music</a>
            <a className={classes.item} href="/settings">Settings</a>
        </nav>
    );
};

export default Navbar;