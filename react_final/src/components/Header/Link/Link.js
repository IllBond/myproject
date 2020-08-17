import React from 'react';
import style from './Link.module.css'
import {NavLink} from "react-router-dom";

const Link = (props) => {
    return (
        <div
            className={`${style.item}`}>
            <NavLink to='google.com'>{props.link}</NavLink>
        </div>
    );
}

export default Link;
