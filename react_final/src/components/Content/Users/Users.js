import React from 'react';
import style from './Users.module.css'



const Users = (props) => {
debugger
    let localUsers = [
        {
            id: 1,
            photo: 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg',
            name: 'Виктор',
            isFollow: false,
            status: 'Статуст вот такой вот он'
        },
        {
            id: 2,
            photo: 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg',
            name: 'Вася',
            isFollow: true,
            status: 'Статуст такой вот он'
        },
    ]

    if (props.users.length < 1) {
        props.getUsers(localUsers)
        return (<div></div>)

    } else {
        return (
            <div>
                {props.users.map(u => {
                    return <div key={u.id}>
                        <div><img src={u.photo} width='50' alt=""/></div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>
                            {u.isFollow ? (
                                <button onClick={() => props.unfollow(u.id)}>Отписаться</button>) : (
                                <button onClick={() => props.follow(u.id)}>Подписаться</button>)}
                        </div>
                        <hr/>
                    </div>
                })}
            </div>
        );
    }
}

export default Users;
