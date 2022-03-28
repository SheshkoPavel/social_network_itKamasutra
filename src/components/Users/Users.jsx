import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            <div>
                {props.users.map((el) => <User user={el} key={el.id} isFollowingInProgress={props.isFollowingInProgress}
                                               follow={props.follow} unFollow={props.unFollow}/>
                )
                }
            </div>
        </div>
    );
};

export default Users;