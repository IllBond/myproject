import React,  {useState} from 'react';
import s from './Profile_Info.module.css'
import x from './../Profile.module.css'
import Prelaoder from "../../Preloader/Preloader";
import ProfileStatusHook from "../ProfileStatusHook";
import {Field, reduxForm} from "redux-form";



let Profile_Info = (props) => {

    let showFormData = (formData)=> {console.log(formData)}

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

            {editMode ? <AllProfileInfo_EditMode_ReduxForm ToggleEditMode={ToggleEditMode} isYou={props.isYou} onSubmit={showFormData} data={props.data}/> : <AllProfileInfo isYou={props.isYou}  ToggleEditMode={ToggleEditMode} data={props.data} />}

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


        <form className={s.citata} onSubmit={props.handleSubmit}>
            <div><strong>Меня зовут</strong>, <Field component={'input'} type="text" placeholder={'name'} name={'name'}/></div>
            <div><strong>Обо мне</strong>, <Field component={'input'} type="text" placeholder={'anoutMe'} name={'anoutMe'}/></div>
            <div>>Ищу работу? <Field component={'input'} type="checkbox" name={'lookingForAJob'}/></div>
            <div><strong>Мои нвыки</strong>, <Field component={'input'} type="text" placeholder={'lookingForAJobDescription'} name={'lookingForAJobDescription'}/></div>
            <div className={x.statusContact}>
                <b>Мои контакты:</b>
                <ContactEdit contacts={props.data.contacts} />
            </div>
            {props.isYou || <button type={'submit'}>Сохранить</button>}
            {/*{()=>{props.ToggleEditMode(false)}}  -  ВЫКЛЮЧИТЬ РЕДАКИРВРООАЕЕ*/}

        </form>
    </div>
};


let AllProfileInfo_EditMode_ReduxForm = reduxForm({form:'AllProfileInfo'})(AllProfileInfo_EditMode)

let Contact = (props) => {
    return <div>
        {Object.keys(props.contacts).map(key => <div key={key}> {key} : {props.contacts[key]?props.contacts[key]:'пусто'}</div>)}
    </div>
}

let ContactEdit = (props) => {
    return <div>
        {Object.keys(props.contacts).map(key => <div key={key}> {key} : <Field component={'input'} type={'text'} placeholder={key} name={key}/></div>)}
    </div>
}

export default Profile_Info;