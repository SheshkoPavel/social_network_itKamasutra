import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let action = addPostActionCreator('testText');
let state = {
    posts: [
        {id: 1, message: "Privet drug", likesCount: 10},
        {id: 2, message: "Нормально ты заряжаешь", likesCount: 3},
        {id: 3, message: "Прокинул через пропсы", likesCount: 7}
    ]
};

test('test profileReducer. add new post. length must be 4', () => {
    // 1. Тестовый набор данных
/*    let action = addPostActionCreator('text');
    let state = {
        posts: [
            {id: 1, message: "Privet drug", likesCount: 10},
            {id: 2, message: "Нормально ты заряжаешь", likesCount: 3},
            {id: 3, message: "Прокинул через пропсы", likesCount: 7}
        ]
    };*/
    // 2. Действие
    let newState = profileReducer(state, action);
    // 3. Ожидания
    expect (newState.posts.length).toBe(4);
});

test('test profileReducer. add new post. New text must be testText', () => {
    let newState = profileReducer(state, action);
    expect (newState.posts[3].message).toBe('testText');
});

test('new Delete function. length must be 2', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(2);
});

test('length must stay if someone try delete not created post', () => {
    let action = deletePost(10000);
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(3);
});