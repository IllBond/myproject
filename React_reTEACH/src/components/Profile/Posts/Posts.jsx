import React from 'react';
import s from './Posts.module.css'
import MyPosts from "./MyPosts/MyPosts";


let Posts = (props) => {

    

    let showValTextArea = () => {
        props.showValTextArea()
    }

    let ChangePostFiel = (e) => {
        props.ChangePostField(e.target.value)
    }

    let new_postData = props.postsDate.map((element)=>{
        return <MyPosts id={element.id} dislikes={element.dislikes} key={element.id} likes={element.likes} message={element.message}/>
    })

    return <div className={s.posts}>

        <div className={s.form}>
            <h4>А тут можно написать пост</h4>
            <div>
                <div>{props.newPostField}</div>
                <textarea onChange={ChangePostFiel}  cols="30" rows="2" value={props.newPostField}/>
            </div>
            <div>
                <button onClick={showValTextArea}>Отправить</button>
            </div>
        </div>
        {new_postData}
    </div>
}

export default Posts;