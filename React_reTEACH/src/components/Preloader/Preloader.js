import React from 'react';
import s from '../../load.gif'
import style from './Preloader.module.css'

let Prelaoder = (props) => {

    if (props.ToglePreloader === true) {
        return <div><img src={s} className={style.width} alt=""/>...</div>
    } else {
        return ''
    }
}

export default Prelaoder