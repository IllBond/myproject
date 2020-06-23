import React, {useState, useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Form = () => {
    const [value, setvalue] = useState('')
    const alert = useContext(AlertContext)
    const submitHandler = event => {
        event.preventDefault()
        alert.show(value, 'success')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className='form-control'
                    placeholder='Введите название заметки'
                    value={value}
                    onChange={e=>setvalue(e.target.value)}
                />
            </div>
        </form>
    )
};