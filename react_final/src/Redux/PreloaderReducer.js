const SETNEWPRELOADER = 'SETNEWPRELOADER';

let initialState = {
    isNewPreloader: false
};

export let preloaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETNEWPRELOADER:
            return {...state, isNewPreloader: action.state};
        default:
            return state
    }
};

export const setNewPreloader = (state) =>
    ({
        type: SETNEWPRELOADER,
        state: state,
    });
