import React from 'react';
import s from './Profile_Info.module.css'

let Profile_Info = () => {
    return <div className={s.item}>
        <div>
            <img
                src="https://www.dhresource.com/260x260s/f2-albu-g6-M00-6A-38-rBVaSFtUfcmAaGFBAAL1sa0Ucss770.jpg/hot-sall-wonder-woman-shield-logo-iron-on.jpg"
                alt=""/>
        </div>
        <div className={s.citata}>
            <strong>Вы говорите</strong>, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, dolor
            dolores eaque eligendi
            enim ex expedita explicabo laudantium perspiciatis provident quod repellat sequi totam ullam, voluptate.
            Deserunt dignissimos labore officia?
        </div>
    </div>

}

export default Profile_Info;