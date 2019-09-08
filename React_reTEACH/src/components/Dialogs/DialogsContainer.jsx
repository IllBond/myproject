import React from 'react';

import {addMessageActionCreator, updateNewMessageNameText, updateNewMessageText} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


let DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
        (store) => {

            let sendMessage = () => {
                 store.dispatch(addMessageActionCreator())
            };

            let updateMessage = (text) => {
                let message = text;
                store.dispatch(updateNewMessageText(message))
            };

            let updateName = (text) => {
                let name = text;
                 store.dispatch(updateNewMessageNameText(name))
            };
            return <Dialogs
                state={store.getState().dialogReducer}
                sendMessage={sendMessage}
                updateMessage={updateMessage}
                updateName={updateName}/>
        }
    }

    </StoreContext.Consumer>

}

export default DialogsContainer;