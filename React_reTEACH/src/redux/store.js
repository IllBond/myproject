import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

export let store = {
    _callSubscribe() {
        console.log('заглушка')
    },
    _state: {
        profile: {
            postsData: [
                {message: 'Кислотный дождь, берегитесь', dislikes: '1', likes: '23', id: '0'},
                {message: 'Кислотный берегитесьдождь, ', dislikes: '7', likes: '3', id: '1'},
                {message: 'Купить килограмм отверток', dislikes: '2', likes: '2', id: '2'},
            ],
            newPostField: '',
        },
        dialogs:
            {
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
                newMessageField: '',
                newMessageNameField: '',
            },
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },
    dispatch(action) {
        dialogReducer(this._state.dialogs, action)
        profileReducer(this._state.profile,action)
        this._callSubscribe()
    }
}
window.state = store.getState()