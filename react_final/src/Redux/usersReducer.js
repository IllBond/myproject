const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GETUSERS = 'GETUSERS';

const GETUSERSCOUNT = 'GETUSERSCOUNT';
const SETCURRENTPAGE = 'SETCURRENTPAGE';

const SETPRELOADER = "SETPRELOADER"


let initialState = {
    users: [],
    totalCount: 0,
    count: 5,
    currentPage: 1,
    isPreloader: false
};

export let usersReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW:
                return {
                    ...state, users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {...u, isFollow: true}
                        } else {
                            return u
                        }
                    })
                }
            case UNFOLLOW:
                return {
                    ...state, users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {...u, isFollow: false}
                        } else {
                            return u
                        }
                    })
                }
            case GETUSERSCOUNT:
                return {
                    ...state, totalCount: action.usersCount
                }
            case SETCURRENTPAGE:
                return {
                    ...state, currentPage: action.currentPage
                }
            case
            GETUSERS:
                return {...state, users: [...action.users]};
            case
            SETPRELOADER:
                return {...state, isPreloader: action.state};
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