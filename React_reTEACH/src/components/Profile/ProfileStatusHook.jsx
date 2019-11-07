import React, {useState} from 'react';


const ProfileStatusHook = (props) => {
    debugger
    let [variableEditModeWithHook, functionEditModeStatusWithHook] = useState(false)
    let [variableStatusWithHook, functionStatusWithHook] = useState(props.status)

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
        <b>Статус</b> (<i>двойной клик что бы изменить</i>):
        {!variableEditModeWithHook &&
            <div onDoubleClick={activateEditMode}>{props.status || 'нет статуса'}</div>}
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