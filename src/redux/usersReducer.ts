import {usersAPI} from "../api/api";
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const users_FOLLOW_USER = 'users_FOLLOW_USER';
const users_UNFOLLOW_USER = 'users_UNFOLLOW_USER';
const users_SET_USERS = 'users_SET_USERS';
const users_SET_CURRENT_PAGE = 'users_SET_CURRENT_PAGE';
const users_SET_TOTAL_USERS_COUNT = 'users_SET_TOTAL_USERS_COUNT';
const users_TOGGLE_IS_FETCHING = 'users_TOGGLE_IS_FETCHING';
const users_TOGGLE_IS_FOLLOWING_PROGRESS = 'users_TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [] as Array<number> //Array of users id
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case users_FOLLOW_USER : {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el;
                })
            }
        }

        case users_UNFOLLOW_USER : {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el;
                })
            }
        }

        case users_SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case users_SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case users_SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }

        case users_TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case users_TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }

        default :
            return state;
    }
};

//Types for TypeScript

type ActionsTypes = FollowUserActionType | UnfollowUserActionType | SetUsersActionType
    | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType
    | ToggleIsFollowingInProgressActionType

type FollowUserActionType = {
    type: typeof users_FOLLOW_USER
    userId: number
}
type UnfollowUserActionType = {
    type: typeof users_UNFOLLOW_USER
    userId: number
}
type SetUsersActionType = {
    type: typeof users_SET_USERS
    users: Array<UserType>
}
type SetCurrentPageActionType = {
    type: typeof users_SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalUsersCountActionType = {
    type: typeof users_SET_TOTAL_USERS_COUNT
    count: number
}
type ToggleIsFetchingActionType = {
    type: typeof users_TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleIsFollowingInProgressActionType = {
    type: typeof users_TOGGLE_IS_FOLLOWING_PROGRESS
    isFollowingInProgress: boolean
    userId: number
}

//Action Creators
export const followUser = (userId: number): FollowUserActionType => ({type: users_FOLLOW_USER, userId})
export const unfollowUser = (userId: number): UnfollowUserActionType => ({type: users_UNFOLLOW_USER, userId})
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: users_SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType =>
    ({type: users_SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType =>
    ({type: users_SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType =>
    ({type: users_TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (isFollowingInProgress: boolean, userId: number): ToggleIsFollowingInProgressActionType =>
    ({
    type: users_TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowingInProgress,
    userId
})

//Thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>  //To make code shorter we can create own type and use it

export const getUsersThunkCreator = (currentPage: number, pageSize: number):
    ThunkAction<Promise<void>, AppStateType, any, ActionsTypes> => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const follow = (userId: number): ThunkAction<void, AppStateType, any, ActionsTypes> => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        let data = await usersAPI.followUser(userId)
        if (data.resultCode === 0) {
            dispatch(followUser(userId));
        }
        dispatch(toggleIsFollowingInProgress(false, userId));
    }
}

export const unFollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        let data = await usersAPI.unfollowUser(userId)
        if (data.resultCode === 0) {
            dispatch(unfollowUser(userId));
        }
        dispatch(toggleIsFollowingInProgress(false, userId));
    }
}

export default usersReducer;