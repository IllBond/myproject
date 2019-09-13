import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users_Container from "./components/Users/Users_Container";

function App(props) {
    return (

            <div className='app_grid'>
                <Header/>
                <Navbar dialogsData={props.dialogsData}/>
                <div className='content_grid'>
                    <Route path='/profile' component={() => <Profile />}/>
                    <Route path='/messages' component={() => <DialogsContainer />}/>
                    <Route path='/users' component={() => <Users_Container />}/>
                </div>
            </div>

    );
}

export default App;
