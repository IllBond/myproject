import React from "react";

let cell = (props) => {
    return <button
        onClick={() => props.onClick()}
        // onClick={() => props.onClick(props.i)}
        className='square'>
        {props.value}
    </button>
}

export default cell