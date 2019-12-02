import React from 'react';
import s from './../Dialogs.module.css'

let Message = (props) => {


    let mneOtMenya = () => {if (props.sost===true) {
        return s.mne
    } else {
        return s.otMenya
    }}



    return (
        <div className={s.message + ' ' + mneOtMenya()} >
            {props.message}
        </div>
    )
}

export default Message;