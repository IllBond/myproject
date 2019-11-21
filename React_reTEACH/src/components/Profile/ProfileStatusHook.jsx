import React, {useState, useEffect} from 'react';
import s from './Profile.module.css'

const ProfileStatusHook = (props) => {

    let [variableEditModeWithHook, functionEditModeStatusWithHook] = useState(false)
    let [variableStatusWithHook, functionStatusWithHook] = useState(props.status)

    useEffect(()=>{functionStatusWithHook(props.status)},[props.status])

    let activateEditMode = () => {
        functionEditModeStatusWithHook(true)
    };

    let deactivateEditMode = () => {
        functionEditModeStatusWithHook(false)
        props.updateStatusThunk(variableStatusWithHook)
    };

    let onStatusChange = (e) => {
        functionStatusWithHook(e.currentTarget.value)
    };

    return <div>
        <b>Статус</b>:
        {!variableEditModeWithHook &&
            <span className={s.status} onDoubleClick={activateEditMode}>{' '+ props.status || 'нет статуса'}</span>}
        {variableEditModeWithHook &&
            <div>
                <input onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={variableStatusWithHook} />
            </div>}
    </div>
}

export default ProfileStatusHook