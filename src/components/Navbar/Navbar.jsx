import React from 'react';
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.grid__nav}>
            <a className={classes.item} href="#">Profile</a>
            <a className={`${classes.item} ${classes.active}`} href="#">Messages</a>
            <a className={classes.item} href="#">News</a>
            <a className={classes.item} href="#">Music</a>
            <a className={classes.item} href="#">Settings</a>
        </nav>
    );
};

export default Navbar;