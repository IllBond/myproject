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
    axios.get('https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043').then(
        response => {
            console.log(response)
            dispatch(getData(response.data))
        }
    )
};

export const getData = (data) => ({type: GET_DATA, data});

export default commonReducer