const ADD_POST = 'ADD_POST';
const CHANGE_POST_FIELD = 'CHANGE_POST_FIELD';


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: CHANGE_POST_FIELD, post: text});

let initialState = {
    postsData: [
        {message: 'Кислотный дождь, берегитесь', dislikes: '1', likes: '23', id: '0'},
        {message: 'Кислотный берегитесьдождь, ', dislikes: '7', likes: '3', id: '1'},
        {message: 'Купить килограмм отверток', dislikes: '2', likes: '2', id: '2'},
    ],
    newPostField: '1'

}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPostField = state.newPostField;
            let newPost = {message: newPostField, dislikes: '0', likes: '0', id: '3'};
            state.postsData.push(newPost);
            state.newPostField = '';
            return state;
        case CHANGE_POST_FIELD:
            state.newPostField = action.post;
            return state;
        default:
            return state;
    }

}

export default profileReducer