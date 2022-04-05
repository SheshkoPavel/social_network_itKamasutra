import * as React from 'react'
import {connect, useSelector} from "react-redux";
// @ts-ignore
import {setCurrentPage, toggleIsFollowingInProgress, getUsersThunkCreator, follow, unFollow} from "../../redux/usersReducer.ts";
// @ts-ignore
import {Users} from "./Users.tsx";
import Preloader from "../Common/Preloader/Preloader";




export const UserPage = (props) => {

    const isFetching = useSelector((state: any) => state.usersPage.isFetching);

    return (
        <>
            {isFetching ? <Preloader /> : null  }
            <Users />
        </>
    )
}



