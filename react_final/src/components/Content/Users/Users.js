import React from 'react';
import style from './Users.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../../Common/Preloader";


let Users = (props) => {


    return <>
        <div>
            {props.isPreloader?<Preloader/>:null}
        </div>
        <div>
            <div className={style.pages}>
                {
                    props.page.map(p => (p === props.currentPage) ? <span className={style.selected}>{p}</span> :
                        <NavLink className={style.to} to={`/users/${p}`} onClick={() => {
                            props.setNewCurrentPage(p)
                        }}>{p}</NavLink>)
                }
            </div>
            {props.users.map(u => {
                return <div key={u.id}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}><img
                        src={u.photos.small ? u.photos.small : 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg'}
                        width='50' alt=""/></NavLink></div>
                    <div>{u.name}</div>
                    <div>{u.status ? u.status : 'Нет статуса'}</div>
                    <div>
                        {u.isFollow ? (
                            <button onClick={() => props.unfollow(u.id)}>Отписаться</button>) : (
                            <button onClick={() => props.follow(u.id)}>Подписаться</button>)}
                    </div>
                    <hr/>
                </div>
            })}
        </div>
    </>
}
export default Users;
