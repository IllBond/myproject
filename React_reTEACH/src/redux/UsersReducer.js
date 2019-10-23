import {getUserApi} from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETUSERCOUNT = 'SETUSERCOUNT';
const TOGLEPRELOADER = 'TOGLEPRELOADER';
const BUTTONDISABLE = 'BUTTONDISABLE';


let initialState = {
    UsersDate: [],
    PageSize: 5,
    TotalUserSize: 0,
    CurrentPage: 1,
    ToglePreloader: true,
    ButtonDisable: []

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                UsersDate: state.UsersDate.map((e) => {
                    if (e.id === action.id) {
                        return {...e, followed: true}
                    } else {
                        return e
                    }
                })
            }

        }
        case UNFOLLOW: {
            return {
                ...state,
                UsersDate: state.UsersDate.map((e) => {
                    if (e.id === action.id) {
                        return {...e, followed: false}
                    } else {
                        return e
                    }
                })
            }
        }
        case SETUSERS: {
            return {
                ...state,
                UsersDate: action.obj
            }
        }
        case SETCURRENTPAGE: {
            return {
                ...state,
                CurrentPage: action.page
            }
        }
        case SETUSERCOUNT: {
            return {
                ...state,
                TotalUserSize: action.users
            }
        }
        case TOGLEPRELOADER: {

            return {
                ...state,
                ToglePreloader: action.boolean
            }
        }
        case BUTTONDISABLE: {
            return {
                ...state,
                ButtonDisable: action.boolean ?
                    [...state.ButtonDisable, action.UserID] :
                    state.ButtonDisable.filter(id => id !== action.UserID)
            }
        }
        default:
            return state
    }
}

//AC
export const follow = (id) => ({type: FOLLOW, id: id});
export const unfollow = (id) => ({type: UNFOLLOW, id: id});
export const setUsers = (obj) => ({type: SETUSERS, obj: obj});
export const setCurentPage = (page) => ({type: SETCURRENTPAGE, page});
export const setUserCount = (users) => ({type: SETUSERCOUNT, users});
export const ToglePreloader = (boolean) => ({type: TOGLEPRELOADER, boolean});
export const ButtonDisableAC = (boolean, UserID) => ({type: BUTTONDISABLE, boolean, UserID});

//Thunk
export const getUsersThunk = (CurrentPage, PageSize) => {
    return (dispatch) => {
        dispatch(ToglePreloader(true));
        getUserApi.getUsers(CurrentPage, PageSize).then(
            response => {
                dispatch(ToglePreloader(false));
                dispatch(setUsers(response.items));
                dispatch(setUserCount(response.totalCount))
            }
        )
    }
}

export const setNewPageThunk = (pageNumber, PageSize) => {
    return (dispatch) => {
        dispatch(ToglePreloader(true))
        dispatch(setCurentPage(pageNumber));
        getUserApi.getUsers(pageNumber, PageSize).then(
            response => {
                dispatch(ToglePreloader(false))
                dispatch(setUsers(response.items))

            }
        )
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(ButtonDisableAC(true, id));
        getUserApi.postUsers(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(follow(id));
                }
                dispatch(ButtonDisableAC(false, id))
            });
    }
}

export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(ButtonDisableAC(true, id));
        getUserApi.deleteUsers(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollow(id));
                }
                dispatch(ButtonDisableAC(false, id))
            });
    }
}


export default usersReducer

