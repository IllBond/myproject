import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

import {AuthC} from "./components/Login/LoginContainer";
import {connect} from "react-redux";

import {compose} from "redux";
import {initialazeAPP} from "./redux/AppReducer";
import Preloader from "./components/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initialazeAPP()
    }

    render() {

        //проверочка. Если поле initialazed true то мы инициализированы в системе и можно перерендерить весть АПП иначе показать прелоадер. Иначе если этого не сделать то рендер всего древа будет вызываться всегда и после перезагрузки странциы мы будем перекидыватся в начало
        if (!this.props.initialazed) {
            return <Preloader/>
        }
        return (
            <div className='app_grid'>
                <HeaderContainer/>
                <Navbar dialogsData={this.props.dialogsData}/>
                <div className='content_grid'>
                    <Route path='/profile/:profileID?' component={() => <ProfileContainer/>}/>
                    <Route path='/messages' component={() => <DialogsContainer/>}/>
                    <Route path='/users' component={() => <UsersContainer/>}/>
                    <Route path='/login' component={() => <AuthC/>}/>
                </div>
            </div>

        );
    }
}

let mapStateToProps = (state) => ({initialazed: state.app.initialaized});

export default compose(
    withRouter,
    connect(mapStateToProps, {initialazeAPP}))(App)
;
