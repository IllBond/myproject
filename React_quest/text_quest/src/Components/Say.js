import React from 'react';

function Say(props) {

    return <div>
        <b>
            {props.text.map(key => key[0] ?
                <div className={'grey'} key={'id' + Math.random()}>{key[1]}<br/></div> :
                <div key={'id' + Math.random()}>{key[1]}<br/></div>)}
        </b>
    </div>
}


export default Say;
