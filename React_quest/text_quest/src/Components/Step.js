import React from 'react';
import './../index.css';

let Heart = (props) => {
    return  <div>
        {(props.step>0) ? <span >{props.step}<span> 🦶 </span></span> : alert('конец игры, ты поломал все ноги')}
    </div>
};


export default Heart;
