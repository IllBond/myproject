import React, {Component} from 'react';
import {connect} from "react-redux";
import {THUNK_getNews} from "../../../Redux/NewsReducer";


let News = (props) => {
    debugger
    return (
        <div>
            {props.news.articles ? props.news.articles.map(item=><div>
                <div>Автор:{item.author} Дата: {item.publishedAt}</div>
                <div><img src={item.urlToImage} alt="картинка"/></div>
                <div>Название: {item.title} </div>
                <div>Краткое описание: {item.description} </div>
                <div><a target='_blank' href={item.url}>Перейти:</a> </div>
                <hr/>
            </div>):''}

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
