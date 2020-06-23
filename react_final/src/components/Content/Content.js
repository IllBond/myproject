import React from 'react';
import style from './Content.module.css'

import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import MessageContainer from "./Users/UsersContainer";
import ProfileС from "./Profile/ProfileС";


const Content = (props) => {

    return (
        <>
               <Route path="/profile/:userID?" component={ProfileС}/>
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
