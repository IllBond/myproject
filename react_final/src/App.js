import React from 'react';

import './App.css';
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

const App = (props) => {

    return (
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
                <Content state={props.state}
                         dispatch={props.dispatch}
                />
            </div>
        </div>

    );
};

export default App;
