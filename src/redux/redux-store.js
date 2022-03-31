import {applyMiddleware, combineReducers,  createStore} from "redux";
import profileReducer from "./profileReducer.ts";
import dialogsReducer from "./dialogsReducer.ts";
import usersReducer from "./usersReducer.ts";
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

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});


/* // With Chrome extension, but work with bugs
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
*/


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;