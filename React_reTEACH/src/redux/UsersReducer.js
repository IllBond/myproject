const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETUSERCOUNT= 'SETUSERCOUNT';
const TOGLEPRELOADER= 'TOGLEPRELOADER';


export const follow = (id) => ({type: FOLLOW, id: id});
export const unfollow = (id) => ({type: UNFOLLOW, id: id});
export const setUsers = (obj) => ({type: SETUSERS, obj: obj});
export const setCurentPage = (page) => ({type: SETCURRENTPAGE, page});
export const setUserCount = (users) => ({type: SETUSERCOUNT, users});
export const ToglePreloader = (boolean) => ({type: TOGLEPRELOADER, boolean});


let initialState = {
    UsersDate: [],
    PageSize: 5,
    TotalUserSize: 0,
    CurrentPage: 1,
    ToglePreloader: true
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                UsersDate: state.UsersDate.map((e) => {
                    if (e.id === action.id) {
                        return {...e, folowed: true}
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
                        return {...e, folowed: false}
                    } else {
                        return e
                    }
                })
            }
        }
        case SETUSERS: {
            return {
                ...state,
                UsersDate:  action.obj
            }
        }
        case SETCURRENTPAGE: {
            return {
                ...state,
                CurrentPage:  action.page
            }
        }
        case SETUSERCOUNT: {
            return {
                ...state,
                TotalUserSize:  action.users
            }
        }
        case TOGLEPRELOADER: {
            return {
                ...state,
                ToglePreloader:  action.boolean
            }
        }
        default:
            return state
    }

}

export default usersReducer

