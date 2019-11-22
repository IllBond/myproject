import React,  {useState} from 'react';
import s from './Profile_Info.module.css'
import x from './../Profile.module.css'
import Prelaoder from "../../Preloader/Preloader";
import ProfileStatusHook from "../ProfileStatusHook";



let Profile_Info = (props) => {

    let [editMode, ToggleEditMode] = useState(false)
    const loadFile = (e) => {

        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };

    if (props.data === null || props.data === undefined) {
        return <Prelaoder ToglePreloader={props.ToglePreloader}/>
    } else {
        return <div className={s.item}>
            <div>
                <img
                    src={props.data.photos.large || 'https://www.dhresource.com/260x260s/f2-albu-g6-M00-6A-38-rBVaSFtUfcmAaGFBAAL1sa0Ucss770.jpg/hot-sall-wonder-woman-shield-logo-iron-on.jpg'}
                    alt=""/>
            </div>
            <div>
                {props.isYou || <input type="file" onChange={loadFile}/>}
            </div>
            <ProfileStatusHook status={props.status} updateStatusThunk={props.updateStatusThunk}/>

            {editMode ? <AllProfileInfo_EditMode ToggleEditMode={ToggleEditMode} isYou={props.isYou}  data={props.data}/> : <AllProfileInfo isYou={props.isYou}  ToggleEditMode={ToggleEditMode} data={props.data} />}

        </div>
    }
}

let AllProfileInfo = (props) => {

    return <div>
        <h3>Информация обо мне</h3>
        {props.isYou || <button onClick={()=>{props.ToggleEditMode(true)}}>Редактировать</button> }
        <div className={s.citata}>
            <div><strong>Меня зовут</strong>, <span
                className={x.status}>{props.data.fullName ? props.data.fullName : 'Тайна'}</span></div>
            <div><strong>Обо мне</strong>, <span
                className={x.status}>{props.data.aboutMe ? props.data.aboutMe : 'Ничего...'}</span></div>
            <div> > <span
                className={x.status}>{!props.data.lookingForAJob ? 'Я ищу работу' : 'У меня уже есть работа'}</span>
            </div>
            <div><strong>Мои нвыки</strong>, <span
                className={x.status}>{props.data.lookingForAJobDescription ? props.data.lookingForAJobDescription : 'Пока никаких'}</span>
            </div>
            <div className={x.statusContact}>
                <b>Мои контакты:</b>
                <Contact contacts={props.data.contacts} />
            </div>
        </div>
    </div>
};

let AllProfileInfo_EditMode = (props) => {

    return <div>
        <h3>Информация обо мне</h3>
        {props.isYou || <button onClick={()=>{props.ToggleEditMode(false)}}>Сохранить</button>}


        <form className={s.citata}>
            <div><strong>Меня зовут</strong>, <input type="text" value={props.data.fullName}/></div>
            <div><strong>Обо мне</strong>, <input type="text" value={props.data.aboutMe}/></div>
            <div>>Ищу работу? <input type="checkbox" checked={props.data.lookingForAJob}/></div>
            <div><strong>Мои нвыки</strong>, <input type="text" value={props.data.lookingForAJobDescription}/></div>
            <div className={x.statusContact}>
                <b>Мои контакты:</b>
                <ContactEdit contacts={props.data.contacts} />
            </div>
        </form>
    </div>
};


let Contact = (props) => {
    return <div>
        {Object.keys(props.contacts).map(key => <div key={key}> {key} : {props.contacts[key]?props.contacts[key]:'пусто'}</div>)}
    </div>
}

let ContactEdit = (props) => {
    return <div>
        {Object.keys(props.contacts).map(key => <div key={key}> {key} : <input value={props.contacts[key]}/></div>)}
    </div>
}

export default Profile_Info;