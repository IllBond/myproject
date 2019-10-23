import {profileAPI} from "../API/API";

const ADD_POST = 'ADD_POST';
const CHANGE_POST_FIELD = 'CHANGE_POST_FIELD';
const SETUSERPROFILE =  'SETUSERPROFILE'
const TOGLEPRELOADER = 'TOGLEPRELOADER';
const SET_STATUS = 'SET_STATUS'

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: CHANGE_POST_FIELD, post: text});
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
    newPostField: '',
    data: null,
    ToglePreloader: true,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let message = state.newPostField;
            return {
                ...state,
                newPostField: '',
                postsData: [
                    ...state.postsData,
                    {message: message, dislikes: '0', likes: '0', id: '3'}],

            };
        }
        case CHANGE_POST_FIELD: {
            return  {
                ...state,
                newPostField: action.post
            }
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