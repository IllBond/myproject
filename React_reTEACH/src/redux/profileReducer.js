const ADD_POST = 'ADD_POST';
const CHANGE_POST_FIELD = 'CHANGE_POST_FIELD';


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: CHANGE_POST_FIELD, post: text});

let initialState = {
    postsData: [
        {message: 'Список покупок', dislikes: '1', likes: '23', id: '0'},
        {message: 'Купить мороженко, ', dislikes: '7', likes: '3', id: '1'},
        {message: 'Купить килограмм отверток', dislikes: '2', likes: '2', id: '2'},
    ],
    newPostField: ''

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let message = state.newPostField;
            let stateCopy = {
                ...state,
                newPostField: '',
                postsData: [
                    ...state.postsData,
                    {message: message, dislikes: '0', likes: '0', id: '3'}],

            };
            return stateCopy;
        }
        case CHANGE_POST_FIELD: {
            let stateCopy = {
                ...state,
                newPostField: action.post
            };
            return stateCopy;
        }
        default:
            return state;
    }

}

export default profileReducer