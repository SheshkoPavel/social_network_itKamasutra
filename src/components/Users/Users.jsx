import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {useDispatch, useSelector} from "react-redux";

const Users = (props) => {

    const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount)
    const pageSize = useSelector(state => state.usersPage.pageSize)
    const currentPage = useSelector(state => state.usersPage.currentPage)
    const users = useSelector(state => state.usersPage.users)

    const dispatch = useDispatch()

    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} />
            <div>
                {users.map((el) => <User user={el} key={el.id} /> ) }
            </div>
        </div>
    );
};

export default Users;