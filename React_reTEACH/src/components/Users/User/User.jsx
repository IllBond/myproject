import React from 'react';
import s from './User.module.css'
let User = (props) => {
    return (
        <div className={s.user}>
            <img src={props.state.photo} alt=""/>
            <div>
                {props.state.name}
            </div>
            <div>
                {props.state.status}
            </div>
            <div>
                {props.state.location.country} / {props.state.location.city}
            </div>
            <div>
                {props.state.folowed ? <button onClick={()=>{props.unfollow(props.state.id)}}>Отменить подписку</button> : <button onClick={()=>{props.follow(props.state.id)}}>Подписаться</button>}

            </div>


        </div>
    )
}

export default User