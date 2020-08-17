import {APIGetStatus, APIGetUser, APISetStatus} from "../API/api";

const SETPROFILE = 'SETPROFILE';
const SETPRELOADER = "SETPRELOADER";
const GETSTATUS = "GETSTATUS";


let initialState = {
    userData: [],
    status: null,
    isPreloader: false,

};

export let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETPROFILE:
            return {
                ...state, userData: action.data
            };
        case SETPRELOADER:
            return {...state, isPreloader: action.state};

        case GETSTATUS:
            return {...state, status: action.status};

        default:
            return state
    }
};

export const setProfile = (data) => {
    return {
        type: SETPROFILE,
        data: data
    }
};

export const getStatus = (status) => {
    return {
        type: GETSTATUS,
        status: status
    }
};

export const setPreloader = (state) =>
    ({
        type: SETPRELOADER,
        state: state
    });

export const THUNK_getUser = (id) => async (dispatch) => {

    let responce = await APIGetUser(id)
    dispatch(setProfile(responce.data))

};

export const THUNK_setStatus = (status) => async (dispatch) => {

    let responce = await APISetStatus(status)
    if (responce.data.resultCode === 0) {
        dispatch(getStatus(status))
    }
};

export const THUNK_GetUserStatus = (status) => async (dispatch) => {
    dispatch(setPreloader(true))
    let responce = await APIGetStatus(status)
    dispatch(getStatus(responce.data))
    dispatch(setPreloader(false))

};