import * as React from 'react'
// @ts-ignore
import Paginator from "../Common/Paginator/Paginator.tsx";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    isFollowingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void

}

const Users: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            <div>
                {props.users.map((el) => <User user={el} key={el.id}
                                               isFollowingInProgress={props.isFollowingInProgress}
                                               follow={props.follow} unFollow={props.unFollow}/>
                )
                }
            </div>
        </div>
    );
};

export default Users;