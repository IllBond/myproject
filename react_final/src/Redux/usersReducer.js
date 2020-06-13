const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GETUSERS = 'GETUSERS';


let initialState = {
    users: [],
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
        case
            GETUSERS:
                return {...state, users: [...state.users, ...action.users]};
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