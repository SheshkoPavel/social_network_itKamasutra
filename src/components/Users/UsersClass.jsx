import React from 'react';
import classes from "./Users.module.css";
import axios from "axios";
import userAvatar from "./../../assets/images/cat_ava.jpg"

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

                props.setUsers(response.data.items)
            });
        }
    }

    return (
        <div>
            <div>
                <button onClick={getUsers}>Get users from server</button>
            </div>

            {
                props.users.map((el) => <div key={el.id}>
                    <span>
                        <div>
                            <img
                                className={classes.avatar}
                                src={
                                el.photos.small != null
                                ? el.photos.small
                                : userAvatar
                            } alt="user avatar"/>
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