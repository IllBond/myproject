const ADDITEM = 'ADDITEM';
const USEITEM = 'USEITEM';

export const addItem_AC = (item) => ({type: ADDITEM, item:item});
export const useItem_AC = (item) => ({type: USEITEM, item:item});


let initialState = {
    bag: []
}

const bagReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDITEM: {
            return {
                ...state, bag: [...state.bag, action.item]
            }
        }
        case USEITEM: {
            return {
                ...state, bag: state.bag.filter(x =>x !=action.item)
            }
        }
        default:
            return state;
    }
};

export default bagReducer