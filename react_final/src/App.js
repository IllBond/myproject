import React from 'react';

import './App.css';
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

const App = () => {
    return (
        <div className='main-wrapper'>
            <Logo/>
            <Header links={['first', 'second', 'third']}/>
            <Navbar />
            <Content/>
        </div>
    );
}

export default App;
