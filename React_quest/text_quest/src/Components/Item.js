import React from 'react';

function Item(props) {

 let del = () => {
     if (window.confirm('Точно выкинуть предмет? Действие не отменить?')) {
         props.dropItem(props.item)
     } else {
         return
     }
 }

    return <img onClick={()=>{del()}} width='100' className={'m5'} height='100' src={props.img}/>
}


export default Item;
