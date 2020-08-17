import {APIFistGetUsers, APIFollow, APIGetUsers, APIUnfollow} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GETUSERS = 'GETUSERS';

const GETUSERSCOUNT = 'GETUSERSCOUNT';
const SETCURRENTPAGE = 'SETCURRENTPAGE';

const SETPRELOADER = "SETPRELOADER"

const PRELOADERUSERID = "PRELOADERUSERID"

let initialState = {
    users: [],
    totalCount: 0,
    count: 5,
    currentPage: 1,
    isPreloader: false,
    PreloaderUserID: []
};

export let usersReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW:
                return {
                    ...state, users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {...u, followed: true}
                        } else {
                            return u
                        }
                    })
                };
            case UNFOLLOW:

                return {
                    ...state, users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {...u, followed: false}
                        } else {
                            return u
                        }
                    })
                };
            case GETUSERSCOUNT:
                return {
                    ...state, totalCount: action.usersCount
                };
            case SETCURRENTPAGE:
                return {
                    ...state, currentPage: action.currentPage
                };
            case GETUSERS:
                return {...state, users: [...action.users]};
            case SETPRELOADER:
                return {...state, isPreloader: action.state};
            // case SETSMALLPRELOADER:
            //     return {...state, isSmallPreloader: action.state};
            case PRELOADERUSERID:
                return {...state,  PreloaderUserID: action.ispreload ? [...state.PreloaderUserID, action.id] : state.PreloaderUserID.filter(x=> x!==action.id)};
            default:
                return state
        }
    }
;

export const follow = (id) =>
    ({
        type: FOLLOW,
        id: id
    });

export const unfollow = (id) =>
    ({
        type: UNFOLLOW,
        id: id
    });

export const getUsers = (users) =>
    ({
        type: GETUSERS,
        users: users
    });

export const getUsersCount = (usersCount) =>
    ({
        type: GETUSERSCOUNT,
        usersCount: usersCount
    });

export const setCurrentPage = (currentPage) =>
    ({
        type: SETCURRENTPAGE,
        currentPage: currentPage
    });

export const setPreloader = (state) =>
    ({
        type: SETPRELOADER,
        state: state
    });

// export const setSmallPreloader = (state) =>
//     ({
//         type: SETSMALLPRELOADER,
//         state: state
//     });

export const PreloaderUserIdAC = (id, ispreload) =>
    ({
        type: PRELOADERUSERID,
        id: id,
        ispreload: ispreload
    });

export const THUNK_APIFistGetUsers = (count, currentPage) => async (dispatch) => {
    dispatch(setPreloader(true));
    let responce = await  APIFistGetUsers(count, currentPage)
        dispatch(getUsers(responce.data.items));
        dispatch(getUsersCount(responce.data.totalCount));
        dispatch(setPreloader(false));
}

export const THUNK_APIGetUsers = (count, number) => async (dispatch) => {
    dispatch(setPreloader(true))
    dispatch(setCurrentPage(number))
    let responce = await APIGetUsers(count, number)
        dispatch(getUsers(responce.data.items))
        dispatch(getUsersCount(responce.data.totalCount))
        dispatch(setPreloader(false))

}

export const THUNK_unfollow = (id) => async (dispatch) => {
    dispatch(PreloaderUserIdAC(id, true))
    let responce = await  APIUnfollow(id)
            if (responce.data.resultCode === 0) {
                dispatch(unfollow(id))
                dispatch(PreloaderUserIdAC(id, false))
            }
}

export const THUNK_follow = (id) => async (dispatch) => {
    dispatch(PreloaderUserIdAC(id, true))
    let responce = await APIFollow(id)
            if (responce.data.resultCode === 0) {
                dispatch(follow(id))
                dispatch(PreloaderUserIdAC(id, false))

            }
}