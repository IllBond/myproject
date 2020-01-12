import React from 'react';
import './../index.css';

let Heart = (props) => {
    return  <div className={'center bigFont'}>
        {(props.heart>0) ? <span className={'white'}>{props.heart}<span className={'heart'}> ❤</span></span> : 'Ой ой ты проиграл'}
    </div>
};


export default Heart;
