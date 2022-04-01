import {applyMiddleware, combineReducers,  createStore} from "redux";
// @ts-ignore
import profileReducer from "./profileReducer.ts";
// @ts-ignore
import dialogsReducer from "./dialogsReducer.ts";
// @ts-ignore
import usersReducer from "./usersReducer.ts";
// @ts-ignore
import authReducer from "./authReducer.ts";
import thunkMiddleware from "redux-thunk";


/*To use saga, I should ->  npm install redux-saga
then

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga)

Look at lessons of list we create. Also, we need create root.saga.ts  */

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

/* // With Chrome extension, but work with bugs
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
*/



const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store

export default store