import {createSelector} from "reselect";

let getUserDataSelector = (state) => {
    return {...state.profile.userData}
};

export let getUserData = createSelector(getUserDataSelector, (data)=>{
        //тут что угодно. К примеру массив который фильтруется функцией filter. Вовращает нвоый массив и соотетственно должен перересоваться state
        return {...data}
})


export let getUserStatus = (state) => {
    return state.profile.status
};

export let isPreloaderProfile = (state) => {
    return state.profile.isPreloade
};

export let getAuthId = (state) => {
    return state.auth.id
};

