import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

let Dialog = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <img className={s.ava} src={props.img} alt=""/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog;