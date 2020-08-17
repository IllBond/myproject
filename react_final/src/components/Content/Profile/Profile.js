import React from 'react';
import Preloader from "../../Common/Preloader";
import Status from "./Status/Status";

const Profile = (props) => {
    return (
        <>
            <div>
                {props.isPreloader?<Preloader/>:null}
            </div>
            {props.state.userId ?
                <div>
                    <img width='150' alt='изображение пользователя' src={props.state.photos.large ? props.state.photos.large : 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg'}/>
                    <div><Status THUNK_setStatus={props.THUNK_setStatus} status={props.status}/></div>
                    <div>ID: {props.state.userId}</div>
                    <div>Обо мне: {props.state.aboutMe}</div>
                    <div>{props.state.lookingForAJob?'Не ищу работу':'Ищу работу'}</div>
                    <div>Доп. информация: {props.state.lookingForAJobDescription}</div>
                    <div>Псевдоним: {props.state.fullName}</div>
                </div>
                : null}
        </>
    );
}

export default Profile;
