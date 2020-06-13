import React from 'react';
import style from './Content.module.css'
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import MessageContainer from "./Users/UsersContainer";


const Content = (props) => {

    return (
        <>
               <Route path="/profile" component={Profile}/>
               <Route path="/users" component={MessageContainer}/>
               <Route path="/dialogs" component={() => <Dialogs users={props.state.dialogs.users}
                                                                textMessage={props.state.dialogs.textMessage}
                                                                message={props.state.dialogs.message}
                                                                dispatch={props.dispatch}
               />}/>

        </>
    );
}

export default Content;
