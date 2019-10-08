import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (

            <div className='app_grid'>
                <HeaderContainer/>
                <Navbar dialogsData={props.dialogsData}/>
                <div className='content_grid'>
                    <Route path='/profile/:profileID?' component={() => <ProfileContainer />}/>
                    <Route path='/messages' component={() => <DialogsContainer />}/>
                    <Route path='/users' component={() => <UsersContainer />}/>
                </div>
            </div>

    );
}

export default App;
