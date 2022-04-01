import * as React from 'react'
import {connect} from "react-redux";
// @ts-ignore
import {setCurrentPage, toggleIsFollowingInProgress, getUsersThunkCreator, follow, unFollow} from "../../redux/usersReducer.ts";
// @ts-ignore
import Users from "./Users.tsx";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<number>
}

type MapDispatchPropsType = {
    setCurrentPage: (pageNumber: number) => void
    toggleIsFollowingInProgress: () => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null  }
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType | any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
            setCurrentPage,
            toggleIsFollowingInProgress,
            follow, unFollow,
            getUsers: getUsersThunkCreator
        }
    )
)(UsersContainer);
