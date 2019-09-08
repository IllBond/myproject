const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_FIELD = 'CHANGE_MESSAGE_FIELD';
const CHANGE_NAME_MESSAGE_FIELD = 'CHANGE_NAME_MESSAGE_FIELD';


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageText = (text) => ({type: CHANGE_MESSAGE_FIELD, post: text});
export const updateNewMessageNameText = (text) => ({type: CHANGE_NAME_MESSAGE_FIELD, post: text});

let initialState= {
    dialogsData: [
        {id: '1', name: 'Илья', img: 'http://www.raskraska.com/catalog0001/9182.gif'},
        {id: '2', name: 'Вася', img: 'http://www.raskraska.com/catalog0001/9182.gif'},
        {id: '3', name: 'Женя', img: 'http://www.raskraska.com/catalog0001/9182.gif'},
        {id: '4', name: 'Кена', img: 'http://www.raskraska.com/catalog0001/9182.gif'},
        {id: '5', name: 'Клара', img: 'http://www.raskraska.com/catalog0001/9182.gif'},
        {id: '6', name: 'Гриша', img: 'http://www.raskraska.com/catalog0001/9182.gif'},
    ],
    messageData: [
        {id: '1', message: 'Привет', sost: true},
        {id: '2', message: 'До свидос!', sost: false},
        {id: '3', message: 'Хочу есть', sost: true},
        {id: '4', message: 'Столовка', sost: true},
        {id: '5', message: 'Ну и ладно до свидос!', sost: false},
        {id: '6', message: '...', sost: true},
    ],
    newMessageField: '1',
    newMessageNameField: '2f',
}

const dialogReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageFieldName = state.newMessageNameField;
            let newMessageField = state.newMessageField;
            let newMessageName = {
                id: '1',
                name: newMessageFieldName,
                img: 'http://www.raskraska.com/catalog0001/9182.gif'
            };
            let newMessage = {id: 6, message: newMessageField, sost: false};
            state.dialogsData.push(newMessageName);
            state.messageData.push(newMessage);
            state.newMessageField = '';
            state.newMessageNameField = '';
            return state;
        case CHANGE_MESSAGE_FIELD:
            state.newMessageField = action.post;
            return state;
        case CHANGE_NAME_MESSAGE_FIELD:
            state.newMessageNameField = action.post;
            return state;
        default:
            return state
    }

}

export default dialogReducer