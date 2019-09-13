const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export const follow = (id) => ({type: FOLLOW, id: id});
export const unfollow = (id) => ({type: UNFOLLOW, id: id});

let initialState = {
    UsersDate: [
        {
            id: '1',
            name: 'Илья',
            status: 'Hello world1',
            location: {country: 'Ukrine', city: 'Dnepr'},
            folowed: true,
            photo: 'https://klike.net/uploads/posts/2018-06/1528720172_1.jpg'
        },
        {
            id: '2',
            name: 'Вася',
            status: 'Hello world2',
            location: {country: 'Germany', city: 'Berlin'},
            folowed: false,
            photo: 'https://klike.net/uploads/posts/2018-06/1528720172_1.jpg'
        },
        {
            id: '3',
            name: 'Женя',
            status: 'Hello world3',
            location: {country: 'Austlaia', city: 'Sidney'},
            folowed: true,
            photo: 'https://klike.net/uploads/posts/2018-06/1528720172_1.jpg'
        },
    ],
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
        default:
            return state
    }

}

export default usersReducer

