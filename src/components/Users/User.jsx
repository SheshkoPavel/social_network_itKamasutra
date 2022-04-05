import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Users.module.css";
import userAvatar from "../../assets/images/cat_ava.jpg";
import {useDispatch} from "react-redux";
import {followUser, unfollowUser} from "../../redux/usersReducer.ts";

const User = (props) => {

    const dispatch = useDispatch()

    const follow = (userId) =>{
        dispatch(followUser(userId));
    }

    const unFollow = (userId) =>{
        dispatch(unfollowUser(userId));
    }

    return (
        <div style={{marginBottom: 20}}>
            <div>
                <span>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                            <img
                                className={classes.avatar}
                                src={
                                    props.user.photos.small != null
                                        ? props.user.photos.small
                                        : userAvatar
                                } alt={`user avatar ${props.user.id}`}/>
                            </NavLink>
                        </div>

                        <div>
                            {props.user.followed
                                ? <button disabled={props.isFollowingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              unFollow(props.user.id)
                                          }
                                          }>
                                    Unfollow</button>

                                :
                                <button disabled={props.isFollowingInProgress.some(id => id === props.user.id)}
                                    onClick={() => {
                                     follow(props.user.id)
                                }
                                }> Follow </button>
                            }

                        </div>
                </span>
                <span>
                        <span>
                            <div>
                                {props.user.name}
                            </div>
                            <div>
                                {props.user.status}
                            </div>
                        </span>
                        <span>
{/*                            <div>
                                {"el.location.country"}
                            </div>
                            <div>
                                {"el.location.city"}
                            </div>*/}
                        </span>

                    </span>
            </div>

        </div>
    );
};

export default User;