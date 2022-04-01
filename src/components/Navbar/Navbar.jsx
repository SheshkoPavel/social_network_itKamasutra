import React from 'react';
import "./Navbar.scss";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={'grid__nav'}>
            <NavLink className={({isActive}) => 'item' + ` ${isActive ? 'item_active' : null}`} to="/profile/22856">Profile</NavLink>
            <NavLink className={({isActive}) => 'item' + ` ${isActive ? 'item_active' : null}`} to="/dialogs">Messages</NavLink>
            <NavLink className={({isActive}) => 'item' + ` ${isActive ? 'item_active' : null}`} to="/news">News</NavLink>
            <NavLink className={({isActive}) => 'item' + ` ${isActive ? 'item_active' : null}`} to="/music">Music</NavLink>
            <NavLink className={({isActive}) => 'item' + ` ${isActive ? 'item_active' : null}`} to="/settings">Settings</NavLink>
            <br/>
            <NavLink className={({isActive}) => 'item' + ` ${isActive ? 'item_active' : null}`} to="/users">Find Users</NavLink>
        </nav>
    );
};

export default Navbar;