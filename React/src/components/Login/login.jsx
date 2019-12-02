import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Captcha, Input} from "../FormControl/FormControl";
import {maxLength, required} from "../../Utilites/ValidateForm";
import {Redirect} from "react-router-dom";


const Login = (props) => {

    if (props.isAuth) {
        return (<><Redirect to="/Profile" /></>)
    }
    const onSubmit = (formData)=>{
        props.LoginingThunk(formData)
            }
        return <div>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>
}

const maxLength1 = maxLength(50)
const LoginForm = (props) => {
debugger
       return (
       <form onSubmit={props.handleSubmit}>
       <div>
           <Field type="text" placeholder={'Логин'}  validate={[required,maxLength1]} component={Input} name={'email'}/>
       </div>
       <div>
           <Field type="password" placeholder={'Пароль'}  validate={[required,maxLength1]} component={Input} name={'password'}/>
       </div>
           {props.error && <div>
               {props.error}
           </div>}
       <div>
           <Field type='checkbox' component={'input'} name={'checkbox'}/> Запомнить?
       </div>
           <div>
               {props.captcha ? <div>
                   <img src={props.captcha} alt=""/>
                   <Field type="text" placeholder={'введите проверочный код'}  validate={[required]} component={Captcha} name={'captcha'}/>
               </div>: ''}

           </div>
       <div>
           <button>
               Залогиниться
           </button>
       </div>
   </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default Login