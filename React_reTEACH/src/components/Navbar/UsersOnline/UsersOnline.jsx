import React from 'react';
import s from './UsersOnline.module.css'



let UsersOnline = (props) => {

    if (props.dialogsData !== []) {
        return (
            <div className={s.all}>
                <div>
                    <div>
                        <img src={props.dialogsData[0].img} alt=""/>
                        <span>{props.dialogsData[0].name}</span>
                    </div>

                </div>
                <div>
                    <div>
                        <img src={props.dialogsData[1].img} alt=""/>
                        <span>{props.dialogsData[1].name}</span>
                    </div>

                </div>
                <div>
                    <div>
                        <img src={props.dialogsData[2].img} alt=""/>
                        <span>{props.dialogsData[2].name}</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default UsersOnline;