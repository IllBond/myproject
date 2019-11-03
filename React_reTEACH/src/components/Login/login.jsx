import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../FormControl/FormControl";
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
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const maxLength1 = maxLength(50)
const LoginForm = (props) => {

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
           <button>
               Залогиниться
           </button>
       </div>
   </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default Login