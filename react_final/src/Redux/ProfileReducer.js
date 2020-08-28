import {APIGetStatus, APIGetUser, APILoadIMG, APISetStatus, APIUpdatae_users_data} from "../API/api";
import {stopSubmit} from "redux-form";
import {setNewPreloader} from "./PreloaderReducer";

const SETPROFILE = 'SETPROFILE';
const GETSTATUS = "GETSTATUS";
const LOADIMG = "LOADIMG";



let initialState = {
    userData: [],
    status: null
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETPROFILE:
            return {
                ...state, userData: action.data
            };

        case GETSTATUS:
            return {...state, status: action.status};

        case LOADIMG:
            return {...state, userData: {...state.userData, photos: action.data}};
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


export const loadIMG_AC = (data) =>
    ({
        type: LOADIMG,
        data: data
    });

export const THUNK_getUser = (id) => async (dispatch) => {
    dispatch(setNewPreloader(true))
    let responce = await APIGetUser(id)
    dispatch(setProfile(responce.data))
};

export const THUNK_loadIMG = (data) => async (dispatch) => {
    let responce = await APILoadIMG(data);
    dispatch(loadIMG_AC(responce.data.data.photos))
};

export const THUNK_setStatus = (status) => async (dispatch) => {

    let responce = await APISetStatus(status)
    if (responce.data.resultCode === 0) {
        dispatch(getStatus(status))
    }
};

export const THUNK_GetUserStatus = (status) => async (dispatch) => {
    try {
        let responce = await APIGetStatus(status)
        dispatch(getStatus(responce.data))
    } catch (error) {
        console.log(error)
    }
};

export const THUNK_Updatae_users_data = (data) => async (dispatch,getState) => {
    const userId = getState().auth.id;
    const responce = await APIUpdatae_users_data(data);

    if (responce.data.resultCode===0) {
        dispatch(THUNK_getUser(userId));
    } else {
        dispatch(stopSubmit('ProfileEditData', {_error: responce.data.messages[0]}));
        return Promise.reject(responce.data.messages[0]);
    }
};

export default profileReducer;