import {authThunk} from "./AuthReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialaized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialaized: true
            }
        }
        default:
            return state
    }
}

export const initialSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initialazeAPP = () => {
    return (dispatch) => {
        let promise = dispatch(authThunk())
        Promise.all([promise]).then(()=>{
                dispatch(initialSuccess())
            }
        )
    }
}

export default appReducer

