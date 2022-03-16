import React from 'react';
import classes from "./Users.module.css";
import axios from "axios";
import userAvatar from "./../../assets/images/cat_ava.jpg"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>

                <div>
                    { pages.map(p => {
                        return <span className={this.props.currentPage === p && classes.selectedPage}
                                            onClick={(e)=> {this.onPageChanged(p); }} >{p}</span>
                    })}

                </div>

            {
                this.props.users.map((el) => <div key={el.id}>
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
                                ? <button onClick={() => this.props.unfollowUser(el.id)}>Unfollow</button>
                                : <button onClick={() => this.props.followUser(el.id)}>Follow</button>}

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
        )
    }
}

export default Users;