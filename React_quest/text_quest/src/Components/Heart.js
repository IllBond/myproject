import React from 'react';
import './../index.css';

let Heart = (props) => {
    return  <div >
        {(props.heart>0) ? <span >{props.heart}<span> ❤️</span></span> : alert('конец игры, ты умер')}
    </div>
};


export default Heart;
