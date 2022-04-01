import {profileAPI, usersAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const profile_ADD_POST = 'profile_ADD_POST';
const profile_SET_USER_PROFILE = 'profile_SET_USER_PROFILE';
const profile_SET_STATUS = 'profile_SET_STATUS';
const profile_DELETE_POST = 'profile_DELETE_POST';
const profile_SAVE_PHOTO_SUCCESS = 'profile_SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: "Privet volchara", likesCount: 10},
        {id: 2, message: "Нормально ты заряжаешь", likesCount: 3},
        {id: 3, message: "Прокинул через пропсы", likesCount: 7}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action): InitialStateType => {

    switch (action.type) {
        case profile_ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case profile_SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case profile_SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        case profile_DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }

        case profile_SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        default :
            return state;
    }
}

//Types for TypeScript

type ActionsTypes = AddPostActionCreatorType | SetUserProfileActionType | SetStatusActionType
    | DeletePostActionType | SavePhotoSuccessActionType

type AddPostActionCreatorType = {
    type: typeof profile_ADD_POST
    newPostText: string
}
type SetUserProfileActionType = {
    type: typeof profile_SET_USER_PROFILE
    profile: ProfileType
}
type SetStatusActionType = {
    type: typeof profile_SET_STATUS
    status: string
}
type DeletePostActionType = {
    type: typeof profile_DELETE_POST
    postId: number
}
type SavePhotoSuccessActionType = {
    type: typeof profile_SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

//Action Creators
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType =>
    ({type: profile_ADD_POST, newPostText})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType =>
    ({type: profile_SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType =>
    ({type: profile_SET_STATUS, status})
export const deletePost = (postId: number): DeletePostActionType =>
    ({type: profile_DELETE_POST, postId})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType =>
    ({type: profile_SAVE_PHOTO_SUCCESS, photos})


//Thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>

export const getUserProfile = (userId: number): ThunkType =>
    async (dispatch) => {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    };

export const getStatus = (userId: number): ThunkType =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    };

export const updateStatus = (status: string): ThunkType =>
    async (dispatch) => {
        try {
            let response = await profileAPI.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        } catch (error) {
            console.log(error);
        }
    };

export const savePhoto = (file): ThunkType =>
    async (dispatch) => {
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    };

export default profileReducer;
