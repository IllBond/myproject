import {APIAuth} from "../API/api";

const GETAUTHDATA = 'GETAUTHDATA';
const TEST = 'TEST';
const SETPRELOADER = "SETPRELOADER"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isPreloader: false

};

export let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETAUTHDATA:
            return {
                ...state, id: action.data.id, login: action.data.login, email: action.data.email, isAuth: true
            };
        case SETPRELOADER:
            return {...state, isPreloader: action.state};
        case TEST:
            return {...state};
        default:
            return state
    }
};

export const getAuthData = (data) => {
    return {
        type: GETAUTHDATA,
        data: data
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


export const THUNK_auth = () => (dispatch) => {
    dispatch(setPreloader(true))
    APIAuth()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(getAuthData(responce.data.data))
            }
            dispatch(setPreloader(false))
        })
};
