const ADD_POST = 'ADD_POST';
const CHANGE_POST_FIELD = 'CHANGE_POST_FIELD';
const SETUSERPROFILE =  'SETUSERPROFILE'
const TOGLEPRELOADER= 'TOGLEPRELOADER';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: CHANGE_POST_FIELD, post: text});
export const setProfile = (data) => ({type: SETUSERPROFILE, post: data});
export const ToglePreloader = (boolean) => ({type: TOGLEPRELOADER, boolean});

let initialState = {
    postsData: [
        {message: 'Список покупок', dislikes: '1', likes: '23', id: '0'},
        {message: 'Купить мороженко, ', dislikes: '7', likes: '3', id: '1'},
        {message: 'Купить килограмм отверток', dislikes: '2', likes: '2', id: '2'},
    ],
    newPostField: '',
    data: null,
    ToglePreloader: true


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
        default:
            return state;
    }

}

export default profileReducer