import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersThunkCreator} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

const UsersPage = (props) => {

    const pageSize = useSelector(state => state.usersPage.pageSize)
    const currentPage = useSelector(state => state.usersPage.currentPage)
    const isFetching = useSelector(state => state.usersPage.isFetching)

    const dispatch = useDispatch()

    useEffect(()=> dispatch(getUsersThunkCreator(currentPage, pageSize)), [])

    return (
        <>
            {isFetching ? <Preloader /> : null  }
            <Users />
        </>
    )

}


export default UsersPage;
