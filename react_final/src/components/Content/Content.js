import React from 'react';
import style from './Content.module.css'
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const Content = () => {
    return (
        <>

               <Route path="/profile" component={Profile}/>
               <Route path="/dialogs" component={Dialogs}/>

        </>
    );
}

export default Content;
