import React from 'react';
import s from './MyPosts.module.css'

let MyPosts = (props) => {
    return <div>
        <div className={s.item}>
            <div className={s.post}>
                <img src="http://www.raskraska.com/catalog0001/9182.gif" alt=""/> {props.message}
                <div>
                    {props.dislikes} <img className={s.likes} src="https://svgsilh.com/svg/2028634.svg" alt=""/>
                    {props.likes} <img className={s.likes} src="https://svgsilh.com/svg/159474.svg" alt=""/>
                </div>
            </div>
        </div>
    </div>
}

export default MyPosts;