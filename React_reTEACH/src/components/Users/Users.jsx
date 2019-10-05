import React from 'react';
import s from './Users.module.css'

let Users = (props) => {


    return <div>
        <div className={s.page}>
            {
                props.page.map((p) => {
                    if (p === props.CurrentPage) {
                        return <span className={s.page_select}>{p}</span>
                    } else {
                        return <span onClick={() => {
                            props.setNewPage(p)
                        }}>{p}</span>
                    }
                })
            }
        </div>
        {props.UsersDate.map((d) => {
                return <div className={s.user}>
                    <img src={d.photos.small ? d.photos.small : 'https://klike.net/uploads/posts/2018-06/1528720172_1.jpg'}
                         alt=""/>
                    <div>
                        {d.name}
                    </div>
                    <div>
                        {d.status}
                    </div>
                    <div>
                        {/*{d.location.country} / {d.location.city}*/}
                    </div>
                    <div>
                        {d.folowed ? <button onClick={() => {
                            props.unfollow(d.id)
                        }}>Отменить подписку</button> : <button onClick={() => {
                            props.follow(d.id)
                        }}>Подписаться</button>}
                    </div>
                </div>

            }
        )}
    </div>
}

export default Users