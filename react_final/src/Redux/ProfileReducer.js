const SETPROFILE = 'SETPROFILE';
const TEST = 'TEST';
const SETPRELOADER = "SETPRELOADER"


let initialState = {
    message: [],
    isPreloader: false
};

export let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETPROFILE:
            return {
                ...state, message: action.data
            };
        case SETPRELOADER:
            return {...state, isPreloader: action.state};
        case TEST:
            return {...state};
        default:
            return state
    }
};

export const setProfile = (data) => {
    return {
        type: SETPROFILE,
        data: data
    }
};

export const test = () =>
    ({
        type: TEST
    });

export const setPreloader = (state) =>
    ({
        type: SETPRELOADER,
        state: state
    });