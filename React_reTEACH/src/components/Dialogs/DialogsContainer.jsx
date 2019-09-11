import React from 'react';

import {addMessageActionCreator, updateNewMessageNameText, updateNewMessageText} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state.dialogReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessage: (text) => {
            let message = text;
            dispatch(updateNewMessageText(message))
        },
        updateName: (text) => {
            let name = text;
            dispatch(updateNewMessageNameText(name))
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;