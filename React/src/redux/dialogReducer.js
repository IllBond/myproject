const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessageActionCreator = (MessageNameField,MessageField) => ({type: ADD_MESSAGE, MessageNameField:MessageNameField, MessageField:MessageField});

let initialState = {
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
    ]
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessageFieldName = action.MessageNameField;
            let newMessageField = action.MessageField;
            return {
                ...state,
                dialogsData: [...state.dialogsData, {
                    id: '1',
                    name: newMessageFieldName,
                    img: 'http://www.raskraska.com/catalog0001/9182.gif'
                }],
                messageData: [...state.messageData, {
                    id: 6,
                    message: newMessageField,
                    sost: false
                }]
            }
        }
        default:
            return state
    }

}

export default dialogReducer