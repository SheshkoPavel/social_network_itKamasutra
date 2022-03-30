import {profileAPI, usersAPI} from "../api/api";

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
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

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

export const addPostActionCreator = (newPostText) => ({type: profile_ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: profile_SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: profile_SET_STATUS, status})
export const deletePost = (postId) => ({type: profile_DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: profile_SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        console.log(error);
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export default profileReducer;
