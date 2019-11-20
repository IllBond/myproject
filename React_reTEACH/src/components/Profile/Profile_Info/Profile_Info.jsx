import React from 'react';
import s from './Profile_Info.module.css'
import Prelaoder from "../../Preloader/Preloader";
import ProfileStatusHook from "../ProfileStatusHook";


let Profile_Info = (props) => {

    const loadFile = (e) => {

        if(e.target.files.length){
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
                {props.isYou || <input type="file" onChange={loadFile} />}

            </div>
            <div className={s.citata}>
                <div><strong>Вы говорите</strong>, <div>{props.data.aboutMe ? props.data.aboutMe : 'Ничего вы не говорите...'}</div></div>
                    <ProfileStatusHook status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            </div>
            <Prelaoder ToglePreloader={props.ToglePreloader}/>
        </div>
    }

}

export default Profile_Info;