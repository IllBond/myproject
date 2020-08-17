import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {THUNK_auth_login} from "../../../Redux/authReducer";
import {connect} from "react-redux";
import {required} from "../../FORM/validate";
import {Input_c} from "../../FORM/ErrorComponent";
import {Redirect} from "react-router-dom";

let LoginRedux = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field  validation={[required]} component={Input_c} name={'login'} type='text' placeholder='Логин'/></div>
            <div><Field validation={[required]} component={Input_c}  name={'password'} type='password' placeholder='Пароль'/></div>
            <div> Запомниь? <Field component='input' type='checkbox' name='checkbox'/></div>
            <div>
                {props.error && <div>
                    {props.error}
                </div>}
            </div>
            <div><button>Залогиниться</button></div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginRedux);


class Autorized extends Component {

    render() {

        if (this.props.isAuth) {return <Redirect to={'/profile'}/>}
        return (
            <div>
                <LoginReduxForm onSubmit={(formData) => {
                    this.props.THUNK_auth_login(formData.login, formData.password, formData.remember, true)
                }}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps,{THUNK_auth_login})(Autorized);
