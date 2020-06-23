import React from 'react';
import './App.css';
import Calculator from "./components/Calculator"
import CalculatorAlt from "./components/CalculatorAlt";


function App() {
    return (
        <div>
            <div id={'main_container'}>
                <CalculatorAlt />
                <Calculator />
            </div>
        </div>
    );
}

export default App;
