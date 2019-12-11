import * as axios from "axios";
const GET_DATA = 'GET_DATA'
const RELOAD = 'RELOAD'


let initialState = {
    data: []
};

let commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state,
                data: action.data
            };
        }
        case RELOAD: {
            return {
                ...state
            }
        }
        default:
            return state;
    }
};


export const getDataThunk = () => async (dispatch) => {
    axios.get('https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json').then(
            response => {
                dispatch(getData(response.data))
            }
        )
};

export const getData = (data) => ({type: GET_DATA, data})

export default commonReducer