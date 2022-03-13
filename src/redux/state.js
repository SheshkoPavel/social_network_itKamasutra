const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Privet volchara", likesCount: 10},
                {id: 2, message: "Нормально ты заряжаешь", likesCount: 3},
                {id: 3, message: "Прокинул через пропсы", likesCount: 7}
            ],
            newPostText: 'Type here'
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: "Paul"},
                {id: 2, name: "Den"},
                {id: 3, name: "Petr"},
                {id: 4, name: "Viktor"},
                {id: 5, name: "Kate"},
                {id: 6, name: "July"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hello"},
                {id: 3, message: "How are you?"},
                {id: 4, message: "Norm"},
                {id: 5, message: "Yo-yo"}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {      // { type : 'ADD_POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.newMessageBody;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessageBody = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({id: 6, message: newMessageBody})
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () =>  ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () =>  ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text })

export default store;
window.store = store;