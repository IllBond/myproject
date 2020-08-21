import React, {Component, useEffect, useState} from 'react';
import style from './Status.module.css'
import {Field, reduxForm} from "redux-form";
import {Input_Status_C} from "../../../FORM/ErrorComponent";
import {mexLength, required} from "../../../FORM/validate";


const InputForm = (props) => {
    return <form className={style.ib}>
        <Field
            validate={[required, mexLength_varrible]}
            component={Input_Status_C}
            changeStatus={props.changeStatus}
            autoFocus={true}
            status={props.status}
            offEditMode={props.offEditMode}
            name={'status'}/>
    </form>

}

const InputReduxForm = reduxForm({form: 'status'})(InputForm)
const mexLength_varrible = mexLength(30)


let Status = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, editStatus] = useState(props.status)

    useEffect(() => {
        editStatus(props.status)
    }, [props.status])

    let onEditMode = () => {
        setEditMode(true)
    };

    let offEditMode = () => {
        setEditMode(false)
        props.THUNK_setStatus(status)
    };

    let changeStatus = (value) => {
        editStatus(value)
    };

    return (
        <>
            <div>
                <div>
                    {
                        !editMode ?
                            (
                                <>
                                    {
                                        props.isOwner ?
                                            <>
                                            <span className={style.status} onClick={onEditMode}>{
                                                status ? status :
                                                    <span className={style.grey}>изменить статус</span>
                                            }</span>
                                                <span className={style.grey}> {'<'} Кликни что бы изменить статус</span>
                                            </> :
                                            <span className={style.status}>{
                                                status ? status :
                                                    <span className={style.grey}>статус отсутствует</span>
                                            }</span>
                                    }

                                </>
                            ) :
                            <>
                                <InputReduxForm
                                    changeStatus={changeStatus}
                                    status={status}
                                    offEditMode={offEditMode}
                                />
                                <span
                                    className={style.grey}> {'  <  '} уберите фокус
                                </span>
                            </>

                    }
                </div>
            </div>
        </>
    );
}
//<span>Кликни что бы изменить статус</span>
export default Status;
