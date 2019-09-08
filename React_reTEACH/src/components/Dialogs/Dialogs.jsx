import React from 'react';
import s from './Dialogs.module.css'
import Message from "./MessageItem/MessageItem";
import Dialog from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageNameText, updateNewMessageText} from "../../redux/dialogReducer";



let Dialogs = (props) => {

    let new_dialogsData = props.state.dialogsData.map((element) => {
        return <Dialog name={element.name} id={element.id} img={element.img}/>
    });

    let new_messageData = props.state.messageData.map((element) => {
        return <Message id={element.id} message={element.message} sost={element.sost}/>
    });

    let sendMessage = () => {
        props.sendMessage()
    };

    let updateMessage = (e) => {
        let message = e.target.value;
        debugger;
        props.updateMessage(message)
    };

    let updateName = (e) => {
        debugger;
        let name = e.target.value;
        props.updateName(name)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {new_dialogsData}
            </div>

            <div className={s.messages_item}>
                {new_messageData}
            </div>

            <div className={s.newMessage}>
                <div>
                    <textarea placeholder='Кому отправить сообщение?' onChange={updateName} cols="30"
                              rows="1">{props.state.newMessageNameField}</textarea>

                </div>
                <div>
                    <textarea onChange={updateMessage} cols="30"
                              rows="2">{props.state.newMessageField}</textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;