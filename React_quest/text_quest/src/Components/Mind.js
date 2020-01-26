import React from 'react';

function Mind(props) {

    return <div>
        <i>
            {props.mind.map(key => !key[0] ?
                <div className={'grey borderSH'} key={'id' + Math.random()}>{key[1]}<br/></div> :
                key[0] == 2 ? <div  className={'borderOB_name'} key={'id' + Math.random()}>{key[1]}<br/></div> :
                <div  className={'borderOB'} key={'id' + Math.random()}>{key[1]}<br/></div>)}

        </i>
    </div>
}


export default Mind;
