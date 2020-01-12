const SETEXP = 'SETEXP';

export const setExp = (what) => ({type: SETEXP,what:what});



let initialState = {
    exp: []
}

const expReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETEXP: {
            return {
                ...state, exp: [...state.exp, action.what]
            }
        }
        default:
            return state;
    }

}

export default expReducer