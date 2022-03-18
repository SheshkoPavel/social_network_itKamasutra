import React from 'react';
import classes from "./Users.module.css";
import userAvatar from "../../assets/images/cat_ava.jpg";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>

            <div>      {/* this was like className={props.currentPage === p && classes.selectedPage}*/}
                { pages.map(p => {
                    return <span className={props.currentPage === p ? classes.selectedPage : undefined}
                                 onClick={(e)=> {props.onPageChanged(p); }} >{p}</span>
                })}

            </div>

            {
                props.users.map((el) => <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + el.id }>
                            <img
                                className={classes.avatar}
                                src={
                                    el.photos.small != null
                                        ? el.photos.small
                                        : userAvatar
                                } alt="user avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => props.unfollowUser(el.id)}>Unfollow</button>
                                : <button onClick={() => props.followUser(el.id)}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {el.name}
                            </div>
                            <div>
                                {el.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"el.location.country"}
                            </div>
                            <div>
                                {"el.location.city"}
                            </div>
                        </span>

                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;