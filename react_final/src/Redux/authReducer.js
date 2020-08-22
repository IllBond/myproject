import {APIAuth, APIAuth_login, APIAuth_logOut, APIGet_Captcha} from "../API/api";
import {stopSubmit} from "redux-form";

const GETAUTHDATA = 'GETAUTHDATA';
const TEST = 'TEST';
const SETPRELOADER = "SETPRELOADER"
const SETCAPTCHA = "SETCAPTCHA"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaIMG: null,
    isPreloader: false
};

export let authReducer = (state = initialState, action) => {
    switch (action.type) {

        case GETAUTHDATA:

            return {
                ...state, id: action.id, login: action.login, email: action.email, isAuth: action.isAuth
            };
        case SETPRELOADER:
            return {...state, isPreloader: action.state};;
        case SETCAPTCHA:
            debugger
            return {...state, captchaIMG: action.img};
        case TEST:
            return {...state};
        default:
            return state
    }
};

export const getAuthData = (id, login, email, isAuth) => {
    return {
        type: GETAUTHDATA,
        id,
        login,
        email,
        isAuth
    }
};

export const test = () =>
    ({
        type: TEST
    });

export const setPreloader = (state) =>
    ({
        type: SETPRELOADER,
        state: state
    });


export const setCaptcha = (img) =>
    ({
        type: SETCAPTCHA,
        img: img
    });


export const THUNK_auth = () => async (dispatch) => {
    dispatch(setPreloader(true))
    let responce = await APIAuth()
    if (responce.data.resultCode === 0) {
        let data = responce.data.data
        dispatch(getAuthData(data.id, data.login, data.email, true))
    }
    dispatch(stopSubmit('login', {_error: null}))
    dispatch(setPreloader(false))

};

export const THUNK_get_captcha = () => async (dispatch) => {
    dispatch(setPreloader(true))

    let responce = await APIGet_Captcha()

    dispatch(setCaptcha(responce.data.url))

    dispatch(setPreloader(false))

};

export const THUNK_auth_login = (email, password, rememberMe, captcha) => async (dispatch) => {
    debugger
    dispatch(setPreloader(true))
    let responce = await APIAuth_login(email, password, rememberMe, captcha)
    if (responce.data.resultCode === 0) {
        dispatch(THUNK_auth())
    } else if (responce.data.resultCode === 10) {
        dispatch(THUNK_get_captcha())
    } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Неизвестная ошибка';
        dispatch(stopSubmit('login', {_error: message}))
    }
    dispatch(setPreloader(false))

};

export const THUNK_auth_logOut = () => (dispatch) => {
    dispatch(setPreloader(true));
    let responce = APIAuth_logOut().then(()=>{
        if (responce.data.resultCode === 0) {
            dispatch(getAuthData(null, null, null, false))
        }
        dispatch(setPreloader(false))
    })

};
