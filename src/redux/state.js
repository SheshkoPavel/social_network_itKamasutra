import {rerenderEntireTree} from "../render.js";

let state ={
    profilePage: {
        posts : [
            {id: 1, message: "Privet volchara", likesCount: 10} ,
            {id: 2, message: "Нормально ты заряжаешь", likesCount: 3},
            {id: 3, message: "Прокинул через пропсы", likesCount: 7}
        ]
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
        ],
        sidebar : {}
    }
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 1
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state, addPost);
}

export default state;