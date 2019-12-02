import React from 'react';
import s from './Dialogs.module.css'
import Message from "./MessageItem/MessageItem";
import Dialog from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../Utilites/ValidateForm";
import {TextArea} from "../FormControl/FormControl";


let Dialogs = (props) => {
    let new_dialogsData = props.state.dialogsData.map((element) => {
        return <Dialog name={element.name} id={element.id} key={element.id} img={element.img}/>
    });

    let new_messageData = props.state.messageData.map((element) => {
        return <Message id={element.id} message={element.message} key={element.id} sost={element.sost}/>
    });

    let sendMessage = (MessageNameField,MessageField) => {
        props.sendMessage(MessageNameField,MessageField)
    };

    let onsubmit = (FormData) => {
        sendMessage(FormData.MessageNameField,FormData.MessageField)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {new_dialogsData}
            </div>

            <div className={s.messages_item}>
                {new_messageData}
            </div>

            <div className={s.newMessage}>
                <ReduxLoginForm onSubmit={onsubmit}/>
            </div>
        </div>
    )
}

const maxLength10 = maxLength(10)
const maxLength50 = maxLength(50)
let DialogsForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea} validate={[required,maxLength10]} name={'MessageNameField'} placeholder='Кому отправить сообщение?'/>
        </div>
        <div>
            <Field component={TextArea} validate={[required,maxLength50]} name={'MessageField'}/>
        </div>
        <div>
            <button>Отправить сообщение</button>
        </div>
    </form>)
}

let ReduxLoginForm = reduxForm({form: 'dialogsForm'})(DialogsForm)
export default Dialogs;