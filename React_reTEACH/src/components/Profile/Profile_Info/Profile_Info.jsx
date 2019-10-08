import React from 'react';
import s from './Profile_Info.module.css'
import Prelaoder from "../../Preloader/Preloader";

let Profile_Info = (props) => {

    if (props.data === null) {
        return <Prelaoder ToglePreloader={props.ToglePreloader}/>
    } else {
        return <div className={s.item}>
            <div>
                <img src={props.data.photos.large ? props.data.photos.large : 'https://www.dhresource.com/260x260s/f2-albu-g6-M00-6A-38-rBVaSFtUfcmAaGFBAAL1sa0Ucss770.jpg/hot-sall-wonder-woman-shield-logo-iron-on.jpg'} alt=""/>
            </div>
            <div className={s.citata}>
                {<div><strong>Вы говорите</strong>, <div>{props.data.aboutMe}</div></div>}
            </div>
            <Prelaoder ToglePreloader={props.ToglePreloader} />
        </div>
    }

}

export default Profile_Info;