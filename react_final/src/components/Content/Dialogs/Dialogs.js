import React from 'react';
import style from './Dialogs.module.css'
import User from "./User/User";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div>
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
                <Message/>


        </div>


    );
}

export default Dialogs;
