const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Privet volchara", likesCount: 10},
        {id: 2, message: "Нормально ты заряжаешь", likesCount: 3},
        {id: 3, message: "Прокинул через пропсы", likesCount: 7}
    ],
    newPostText: 'Type here',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText : ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText : action.newText
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

export const addPostActionCreator = () =>  ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) =>  ({ type: SET_USER_PROFILE, profile })


export default profileReducer;
