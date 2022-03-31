import {authAPI, securityAPI} from "../api/api";

const auth_SET_USER_DATA = 'auth_SET_USER_DATA';
const auth_GET_CAPTCHA_URL = 'auth_GET_CAPTCHA_URL';

export type InitialStateType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    captcha: string | null
}

let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case auth_SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        case auth_GET_CAPTCHA_URL:
            return  {
                ...state,
                captcha: action.captcha
            }

        default:
            return state;
    }
}

type SetAuthUserDataActionType = {
    type: typeof auth_SET_USER_DATA,  //Указал явно, что сюда можно запихнуть только то, что в этой константе
    payload: {
        userId: number,
        email: string,
        login: string,
        isAuth: boolean
    }
}
type GetCaptchaActionType = {
    type: typeof auth_GET_CAPTCHA_URL,
    captcha: string
}


export const setAuthUserData = (userId, email, login, isAuth): SetAuthUserDataActionType => ({
    type: auth_SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const getCaptcha = (captcha): GetCaptchaActionType => ({
    type: auth_GET_CAPTCHA_URL,
    captcha: captcha
});


export const getAuthUserData = () => async (dispatch) => {
    try {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
        if (response.data.resultCode === 1) {
            console.log('You are not authorized');
        }
    } catch (error) {
        console.log(error);
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
    if (response.data.resultCode === 10){
        dispatch(getCaptchaURL());
    }
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    const captcha = response.data.url;
    dispatch(getCaptcha(captcha));
};

export default authReducer;