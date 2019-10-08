const SETAUTH = 'SETAUTH';
const TOGLEPRELOADER= 'TOGLEPRELOADER';

export const setAuth = (data) => ({type: SETAUTH, data: data});
export const ToglePreloader = (boolean) => ({type: TOGLEPRELOADER, boolean});

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    ToglePreloader: true
};

const AuthReducer = (state = initialState, action) => {

        switch (action.type) {
        case SETAUTH: {
            return {
                ...state,
                id: action.data.id,
                login: action.data.login,
                email: action.data.email,
                isAuth: true
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

export default AuthReducer

