import React from 'react';
import classes from "./Users.module.css";

const Users = (props) => {

    return (
        <div>
            <div>
                <button onClick={() => props.setUsers([
                        {
                            id: 1,
                            photoURL: 'https://avatarfiles.alphacoders.com/798/thumb-1920-79894.jpg',
                            followed: false,
                            fullName: 'Eugene',
                            status: 'Looking for work',
                            location: {city: 'Minsk', country: 'Belarus'}
                        },
                        {
                            id: 2,
                            photoURL: 'https://p3-tt-ipv6.byteimg.com/origin/pgc-image/2ab5266b1e27469d879288d6e1d225a7.png',
                            followed: true,
                            fullName: 'Paul',
                            status: 'Study hard',
                            location: {city: 'New York', country: 'USE'}
                        },
                        {
                            id: 3,
                            photoURL: 'https://img.freepik.com/free-vector/cute-orange-robot-cat-avatar_79416-86.jpg',
                            followed: false,
                            fullName: 'Dmitry',
                            status: 'Drinking cola',
                            location: {city: 'Wroclaw', country: 'Poland'}
                        }
                    ]
                )}>
                    Load users
                </button>
            </div>
            {
                props.users.map((el) => <div key={el.id}>
                    <span>
                        <div>
                            <img className={classes.avatar} src={el.photoURL} alt="user picture"/>
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
                                {el.fullName}
                            </div>
                            <div>
                                {el.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {el.location.country}
                            </div>
                            <div>
                                {el.location.city}
                            </div>
                        </span>

                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;