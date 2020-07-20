import React from 'react';
import {addMessageAC, changeTextAC} from "../../../../Redux/dialogReducer";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/isAuthRedirect";
import {compose} from "redux";


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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Message)
