import React from 'react';
import {addMessageAC, changeTextAC} from "../../../../Redux/dialogReducer";
import Message from "./Message";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
        return {
        textMessage: state.dialogs.textMessage,
        message: state.dialogs.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: () => {
            dispatch(addMessageAC())
        },
        ChangeMessage: (e) => {
            dispatch(changeTextAC(e.target.value))
        }
    }
}

let MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageContainer;
