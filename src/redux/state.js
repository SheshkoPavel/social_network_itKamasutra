let store = {
    _state : {
        profilePage: {
            posts : [
                {id: 1, message: "Privet volchara", likesCount: 10} ,
                {id: 2, message: "Нормально ты заряжаешь", likesCount: 3},
                {id: 3, message: "Прокинул через пропсы", likesCount: 7}
            ],
            newPostText: 'Hello'
        },
        dialogPage: {
            dialogs : [
                {id: 1, name: "Paul"},
                {id: 2,name: "Den"},
                {id: 3,name: "Petr"},
                {id: 4, name: "Viktor"},
                {id: 5, name: "Kate"},
                {id: 6, name: "July"}
            ],
            messages : [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hello"},
                {id: 3, message: "How are you?"},
                {id: 4, message: "Norm"},
                {id: 5, message: "Yo-yo"}
            ]
        },
        sidebar : {}
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState () {
       return this._state;
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state, this.addPost, this.updateNewPostText);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state, this.addPost, this.updateNewPostText);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }

}


export default store;
window.store = store;