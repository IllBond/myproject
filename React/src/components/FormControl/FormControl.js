import React from 'react';
import s from './FormControl.module.css'

export let TextArea = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error;

    return (<div>
       <span className={s.FormControl + ' ' + (error ? s.error : '')}>
           <textarea {...input} {...props} ></textarea>
       </span>
        <span className={s.FormControl + ' ' + (error ? s.error : '')}>
            {error && <span >{meta.error}</span>}
        </span>

    </div>)
}

export let Input = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error;
    return (<div>
       <span className={s.FormControl + ' ' + (error ? s.error : '')}>
           <input {...input} {...props} ></input>
       </span>
        <span className={s.FormControl + ' ' + (error ? s.error : '')}>
            {error && <span >{meta.error}</span>}
        </span>
    </div>)
}


export let Captcha = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error;
    return (<div>
       <span className={s.FormControl + ' ' + (error ? s.error : '')}>
           <input {...input} {...props} ></input>
       </span>
        <span className={s.FormControl + ' ' + (error ? s.error : '')}>
            {error && <span >{meta.error}</span>}
        </span>
    </div>)
}


