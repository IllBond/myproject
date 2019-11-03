import React from 'react';

import {addMessageActionCreator, updateNewMessageNameText, updateNewMessageText} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthReirect";
import {compose} from "redux";




let mapStateToProps = (state) => {
    return {
        state: state.dialogReducer
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (MessageNameField,MessageField) => {
            dispatch(addMessageActionCreator(MessageNameField,MessageField))
        }
    }
};


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);