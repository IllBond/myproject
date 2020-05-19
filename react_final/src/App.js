import React from 'react';

import './App.css';
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter >

        <div className='main-wrapper'>
            <div className='mainLogo'>
                <Logo/>
            </div>
            <div className='mainHeader'>
                <Header
                    links={['first', 'second', 'third']
                    }/>
            </div>
            <div className='mainNavbar'>
                <Navbar/>
            </div>
            <div className='mainContent'>
                <Content/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
