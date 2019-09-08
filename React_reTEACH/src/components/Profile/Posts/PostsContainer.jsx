import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../redux/profileReducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";


let PostsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {

                let showValTextArea = () => {
                    store.dispatch(addPostActionCreator())
                }

                let ChangePostFiel = (text) => {
                    store.dispatch(updateNewPostText(text))
                }
                return <Posts
                    postsDate={store.getState().profileReducer.postsData}
                    newPostField={store.getState().profileReducer.newPostField}
                    showValTextArea={showValTextArea}
                    ChangePostFiel={ChangePostFiel}/>
            }}
    </StoreContext.Consumer>

}

export default PostsContainer;