import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}





export default store;
window.store = store;