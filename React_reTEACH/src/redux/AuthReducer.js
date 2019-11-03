import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SETAUTH = 'SETAUTH';
const LOGOUT = 'LOGOUT';
const TOGLEPRELOADER = 'TOGLEPRELOADER';

export const setAuth = (data) => ({type: SETAUTH, data: data});
export const LogOut = () => ({type: LOGOUT});
export const ToglePreloader = (boolean) => ({type: TOGLEPRELOADER, boolean});

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
                    dispatch(stopSubmit('login',{_error: response.messages}))
                }
                dispatch(ToglePreloader(false))
            }
        )
    }
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    ToglePreloader: true
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
        default:
            return state
    }
}

export default AuthReducer

