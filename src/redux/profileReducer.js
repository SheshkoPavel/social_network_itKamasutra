import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Privet volchara", likesCount: 10},
        {id: 2, message: "Нормально ты заряжаешь", likesCount: 3},
        {id: 3, message: "Прокинул через пропсы", likesCount: 7}
    ],
    profile: null

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText : ''
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default :
            return state;
    }
}

export const addPostActionCreator = (newPostText) =>  ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) =>  ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}


export default profileReducer;
