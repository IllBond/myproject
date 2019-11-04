import {createSelector} from "reselect";

let profileReducerSelector = (state)=>{
    return state.profileReducer
};

export let profileReducer = createSelector(profileReducerSelector,(profileReducer)=>{
        return profileReducer
    //+какойто фильтр
});



let AuthReducerSelector = (state)=>{
    return state.AuthReducer.id
};


export let AuthReducer = createSelector(AuthReducerSelector,(id)=>{
    return id
    //+какойто фильтр
});
