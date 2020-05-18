import React from 'react';
import style from './Link.module.css'

const Link = (props) => {
    return (
        <div
            className={`${style.item}`}>
            <a href='#'>{props.link}</a>
        </div>
    );
}

export default Link;
