import {profileAPI} from "../API/API";


const ADD_POST = 'ADD_POST';
const SETUSERPROFILE =  'SETUSERPROFILE'
const TOGLEPRELOADER = 'TOGLEPRELOADER';
const SET_STATUS = 'SET_STATUS'

export const addPostActionCreator = (text) => ({type: ADD_POST,text: text});
export const setProfile = (data) => ({type: SETUSERPROFILE, post: data});
export const ToglePreloader = (boolean) => ({type: TOGLEPRELOADER, boolean});
export const setStatus = (status) => ({type: SET_STATUS, status});

export let getProfileDataThunk = (userID) => {
    return (dispatch)=>{
        dispatch(ToglePreloader(true));
        profileAPI.setProfileData(userID).then(
            response => {
                dispatch(ToglePreloader(false));
                dispatch(setProfile(response.data));
            }
        )
    }
}

export let setStatusThunk = (userID) => {
    return (dispatch)=>{
        profileAPI.getStatus(userID).then(
            response => {
                dispatch(setStatus(response.data));
            }
        )
    }
}

export let updateStatusThunk = (status) => {
    return (dispatch)=>{
        profileAPI.updateStatus(status).then(
            response => {
                if (response.data.resultCode ===0) {
                    dispatch(setStatus(status))
                }
            }
        )
    }
}

let initialState = {
    postsData: [
        {message: '', dislikes: '', likes: '', id: ''}
    ],
    data: null,
    ToglePreloader: true,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let message = action.text;
                        return {
                ...state,
                postsData: [
                    ...state.postsData,
                    {message: message, dislikes: '0', likes: '0', id: '3'}],

            };
        }
        case SETUSERPROFILE: {
            return {...state,
                data: action.post
            }
        }
        case TOGLEPRELOADER: {
            return {
                ...state,
                ToglePreloader:  action.boolean
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status:  action.status
            }
        }
        default:
            return state;
    }

}

export default profileReducer