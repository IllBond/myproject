import React from 'react';


let News = (props) => {

    return (
        <div>
            Тут когда то будут новости
            {[1,2,3].map((item)=><li>Какая то новость №{item}</li>)}
        </div>
    )
};

export default News
