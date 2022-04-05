import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Users.module.css";
import userAvatar from "../../assets/images/cat_ava.jpg";
import {useDispatch, useSelector} from "react-redux";
import {follow, unFollow} from "../../redux/usersReducer";

const User = (props) => {

    const isFollowingInProgress = useSelector(state => state.usersPage.isFollowingInProgress)

    const dispatch = useDispatch()

    const followUser = (userID) => {
        dispatch(follow(userID))
    }
    const unfollowUser = (userID) => {
        dispatch(unFollow(userID))
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
                                ? <button disabled={isFollowingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              unfollowUser(props.user.id)
                                          }
                                          }>
                                    Unfollow</button>

                                :
                                <button disabled={isFollowingInProgress.some(id => id === props.user.id)}
                                    onClick={() => {
                                        followUser(props.user.id)
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

                        </span>

                    </span>
            </div>

        </div>
    );
};

export default User;