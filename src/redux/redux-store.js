import {applyMiddleware, combineReducers,  createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {newsReducer} from "./newsReducer";

/*To use saga, I should ->  npm install redux-saga
then

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga)

Look at lessons of list we create. Also, we need create root.saga.ts  */

/* // With Chrome extension, but work with bugs
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
*/

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    newsPage: newsReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
/* Сейчас настраивается так
const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})
И используется @reduxjs/toolkit вместо библиотеки redux
*/

window.store = store;

export default store;