import React from 'react';

import './App.css';
import Logo from "./components/Logo";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const App = () => {
    return (
        <div className='main-wrapper'>
            <Logo/>
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;
