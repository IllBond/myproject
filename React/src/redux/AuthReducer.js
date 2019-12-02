import {authAPI, captchaAPI} from "../API/API";
import {untouch,resetSection, stopSubmit} from "redux-form";

const SETAUTH = 'SETAUTH';
const LOGOUT = 'LOGOUT';
const TOGLEPRELOADER = 'TOGLEPRELOADER';
const SETCAPTCHAURL = 'SETCAPTCHAURL'

export const setAuth = (data) => ({type: SETAUTH, data: data});
export const LogOut = () => ({type: LOGOUT});
export const ToglePreloader = (boolean) => ({type: TOGLEPRELOADER, boolean});
export const SetCaptchaUrl = (url) => ({type: SETCAPTCHAURL, url});

export const authThunk = () => {
    return (dispatch) => {
        dispatch(ToglePreloader(true))
        return authAPI.authAPI().then(
            response => {
                dispatch(ToglePreloader(false))
                if (response.resultCode === 0) {
                    dispatch(setAuth(response.data))
                }
            }
        )
    }
}

export const LogOutThunk = () => {
    return (dispatch) => {
        dispatch(ToglePreloader(true))
        authAPI.logOut().then(
            response => {
                dispatch(ToglePreloader(false))
                if (response.resultCode === 0) {
                    dispatch(LogOut())
                }
            }
        )
    }
}

export const LoginingThunk = (data) => {
    return (dispatch) => {
        dispatch(ToglePreloader(true))
        authAPI.auth(data).then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(authThunk())
                } else {
                    if (response.resultCode === 10) {
                        dispatch(GetCaptchaUrlThunk())
                    }
                    dispatch(stopSubmit('login',{_error: response.messages}))
                }
                dispatch(ToglePreloader(false))
            }
        )
    }
}

export const GetCaptchaUrlThunk = () => {
    return (dispatch) => {
        captchaAPI.getCaptcha().then(
            response => {
               // dispatch(change('login', 'captcha', '')) // Установить у формы конкретного Field конкретное значение
               // dispatch(reset('login','captcha')) // Сброс формы
                dispatch(resetSection('login','captcha')) // Сброс конкретного ield
                dispatch(untouch('login','captcha')) // Убрать отметку что форму трогали
                dispatch(SetCaptchaUrl(response))
            }
        )
    }
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    ToglePreloader: true,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETAUTH: {
            return {
                ...state,
                id: action.data.id,
                login: action.data.login,
                email: action.data.email,
                isAuth: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false
            }
        }
        case TOGLEPRELOADER: {
            return {
                ...state,
                ToglePreloader: action.boolean
            }
        }
        case SETCAPTCHAURL: {
            return {
                ...state,
                captcha: action.url
            }
        }

        default:
            return state
    }
}

export default AuthReducer

