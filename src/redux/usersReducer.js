import {usersAPI} from "../api/api";

const users_FOLLOW_USER = 'users_FOLLOW_USER';
const users_UNFOLLOW_USER = 'users_UNFOLLOW_USER';
const users_SET_USERS = 'users_SET_USERS';
const users_SET_CURRENT_PAGE = 'users_SET_CURRENT_PAGE';
const users_SET_TOTAL_USERS_COUNT = 'users_SET_TOTAL_USERS_COUNT';
const users_TOGGLE_IS_FETCHING = 'users_TOGGLE_IS_FETCHING';
const users_TOGGLE_IS_FOLLOWING_PROGRESS = 'users_TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {
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

export const followUser = (userId) => ({type: users_FOLLOW_USER, userId})
export const unfollowUser = (userId) => ({type: users_UNFOLLOW_USER, userId})
export const setUsers = (users) => ({type: users_SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: users_SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: users_SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: users_TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (isFollowingInProgress, userId) => ({
    type: users_TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowingInProgress,
    userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
};

export const follow = (userId) => {
    return async (dispatch) => {
        try {
            dispatch(toggleIsFollowingInProgress(true, userId));
            let data = await usersAPI.followUser(userId)
            if (data.resultCode === 0) {
                dispatch(followUser(userId));
            }
            dispatch(toggleIsFollowingInProgress(false, userId));
        } catch (error) {
            console.log (error)
        }
    }
};
export const unFollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        let data = await usersAPI.unfollowUser(userId)
        if (data.resultCode === 0) {
            dispatch(unfollowUser(userId));
        }
        dispatch(toggleIsFollowingInProgress(false, userId));
    }
};

export default usersReducer;