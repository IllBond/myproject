import React from 'react';
import style from './Message.module.css'


const Message = (props) => {
    let mapMessages = props.message.map((item) => {
        return <div className={style.dialog + ' ' + (item.address ? '' : style.dialogYou)}>
            <div className={style.dialogPhoto}><img src={item.photo}/></div>
            <div className={style.dialogName}>{item.name}</div>
            <div className={style.dialogDate}>{item.time}</div>
            <div className={style.dialogMessage}>{item.message}</div>
        </div>
    })

    return (
        <div className={style.message}>
            <div className={style.messageWindow}>
                {mapMessages}
            </div>
            <div className={style.newMessage}>
                <div><input onChange={props.ChangeMessage} type='text' value={props.textMessage}/></div>
                <div><input type='button' onClick={props.SendMessage} value='Отправить'/></div>
            </div>
        </div>
    );
}

export default Message;
