import React, {Component} from 'react';
import {connect} from "react-redux";
import {THUNK_getNews} from "../../../Redux/NewsReducer";
import style from "./News.module.css"

let News = (props) => {
    return (
        <div className={style.news_wrapper}>
            {props.news.articles ? props.news.articles.map(item=>
                <div className={style.news_web}>
                    <div>
                        <div className={style.meta}><span className={style.author}>Автор: <span>{item.author}</span></span> <span className={style.date}>Дата: <span>{item.publishedAt}</span></span></div>
                        <div><img className={style.img} src={item.urlToImage} alt="картинка"/></div>
                        <div className={style.title}>{item.title} </div>
                        <div className={style.description}>{item.description} </div>
                    </div>
                    <div>
                        <div><a className={style.link} target='_blank' href={item.url}>Перейти</a> </div>
                    </div>
                </div>
            ):''}

        </div>
    )
};

class NewsContainer extends Component {

    componentDidMount() {
        this.props.THUNK_getNews()
    }

    render () {
        return <News news={this.props.news}/>
    }
}

const mapStatetoProps = (state) => {
    return {
        news: state.newsReducer.news
    }
}


export default connect(mapStatetoProps,{THUNK_getNews})(NewsContainer)
