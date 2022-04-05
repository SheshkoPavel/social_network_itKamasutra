import * as React from 'react'
// @ts-ignore
import Paginator from "../Common/Paginator/Paginator.tsx";
import User from "./User";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import {getUsersThunkCreator, setCurrentPage} from "../../redux/usersReducer.ts";
import {useEffect} from "react";


export const Users = (props) => {

    const users = useSelector((state: any) => state.usersPage.users)
    const totalUsersCount = useSelector((state: any) => state.usersPage.totalUsersCount)
    const currentPage = useSelector((state: any) => state.usersPage.currentPage)
    const pageSize = useSelector((state: any) => state.usersPage.pageSize)
    const isFollowingInProgress = useSelector((state: any) => state.usersPage.isFollowingInProgress)

    const dispatch = useDispatch()
    useEffect(()=> dispatch(getUsersThunkCreator(currentPage, pageSize)), [])

    const onPageChanged = async (pageNumber: number) =>  {
        dispatch(setCurrentPage(pageNumber));
        await dispatch(getUsersThunkCreator(currentPage, pageSize));
    }


    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>
            <div>
                {users.map((el) => <User user={el}
                                         key={el.id}
                                         isFollowingInProgress={isFollowingInProgress}
                                    />
                )
                }
            </div>
        </div>
    );
};