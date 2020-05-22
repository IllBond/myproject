import React from 'react';
import style from './Dialogs.module.css'
import User from "./User/User";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div>
                <User id='1' name='Лера'/>
                <User id='2' name='Валера'/>
                <User id='3' name='Иброгим'/>
                <User id='4' name='Стас'/>
            </div>
                <Message/>


        </div>


    );
}

export default Dialogs;
