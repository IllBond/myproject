import React from 'react';
import s from './Posts.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../FormControl/FormControl";
import {maxLength, required} from "../../../Utilites/ValidateForm";

const maxLength1 = maxLength(50)
let PostsForm = (props) => {
        return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'text'} component={TextArea} validate={[required,maxLength1]}  cols="30" rows="2"/>
        </div>
        <div>
            <button>Отправить</button>
        </div>
    </form>)
};



let ReduxLoginForm = reduxForm({form: 'PostForm'})(PostsForm)


let Posts = React.memo((props) => {

    let onsubmit = (formData)=>{
        showValTextArea(formData.text)
    };

    let showValTextArea = (text) => {
        props.showValTextArea(text)

    };

    let new_postData = props.postsDate.map((element)=>{
        return <MyPosts id={element.id} dislikes={element.dislikes} key={element.id} likes={element.likes} message={element.message}/>
    });
    return <div className={s.posts}>
        <div className={s.form}>
            <h4>А тут можно написать пост</h4>
            <ReduxLoginForm onSubmit={onsubmit}/>
        </div>
        {new_postData}
    </div>
});


// class Posts extends React.PureComponent {
//     render() {
//         console.log('test')
//         let onsubmit = (formData) => {
//             showValTextArea(formData.text)
//         };
//
//         let showValTextArea = (text) => {
//             this.props.showValTextArea(text)
//
//         };
//
//
//         let new_postData = this.props.postsDate.map((element) => {
//             return <MyPosts id={element.id} dislikes={element.dislikes} key={element.id} likes={element.likes}
//                             message={element.message}/>
//         });
//         return <div className={s.posts}>
//             <div className={s.form}>
//                 <h4>А тут можно написать пост</h4>
//                 <ReduxLoginForm onSubmit={onsubmit}/>
//             </div>
//             {new_postData}
//         </div>
//     }
// }





export default Posts;