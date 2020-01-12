import React from 'react';
import './App.css';
import Heart from "./Components/Heart";
import Mind from "./Components/Mind";
import Say from "./Components/Say";
import Option from "./Components/Option";
import Image from "./Components/Image";
import {connect} from "react-redux";
import {heartCollab, hideOption, nextLevel, setLevel, setMind} from "./redux/gameReducer";
import {addItem_AC, useItem_AC} from "./redux/bagReducer";
import {setExp} from "./redux/expReducer";
import Item from "./Components/Item";


let rnd_key = 'id' + Math.random()



let mass = {
    flashlight: 'https://i.ibb.co/pP3wPQR/Screenshot-7.png',
    stawbery: 'https://infoindustria.com.ua/wp-content/uploads/2016/05/klubnika-na-belom.jpg',
    superprig: 'https://i.ibb.co/C2V73jB/23131312.png',
    utug: 'https://i.ibb.co/1nbDQQJ/Screenshot-8.png',
    banan: 'https://i.pinimg.com/originals/70/44/f4/7044f429419819fa4e46c1ef2570b7f0.jpg',
    sword: 'data:image/jpeg;base64,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',
}

function App(props) {

    return <div className={'game'}>
        <div>
            <button onClick={()=>{props.setLevel(0)}}>Телепортироваться в начало уровня</button>
        </div>

        <div id='flex-container'>
            <div>
                <Heart heart={props.gameReducer.heart}/>
            </div>
            <div>
                <div className='bag white'>
                    <div className={'items'}>
                        {props.bagReducer.bag.map((item) => <span key={rnd_key}>{
                            <Item dropItem={props.useItem_AC} item={item} img={mass[item]}/>
                        }</span>)}
                    </div>
                </div>
                {/*<div className='exp white'>*/}
                {/*    /!*<h2 className={'center'}>Игровой опыт</h2>*!/1*/}
                {/*    <div className={'b_whitr'}>*/}
                {/*        {props.expReducer.exp.map((item) => <div key={rnd_key}>{*/}
                {/*            <Item img={mass[item]}/>*/}
                {/*        }</div>)}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div>
                <Image img={props.levelReducer[props.gameReducer.currentLevel].img}/>
            </div>
            <div>
                <Say text={props.levelReducer[props.gameReducer.currentLevel].text}/>
                <Mind mind={props.gameReducer.currentMind}/>
            </div>
            <div>
                <Option
                    hide={props.gameReducer.hide} /*Элементы которые уже нажимались*/
                    bag={props.bagReducer.bag} /*Содержимое Рюкзака*/
                    expItem={props.expReducer.exp} /*Опыт*/
                    hideOption={props.hideOption} /*Добавить в элементы котоыре уже нажимались*/
                    item={props.addItem_AC} /*Добавить предмет*/
                    exp={props.setExp}  /*Добавить Опыт*/
                    nextLevel={props.setLevel} /*Перейти на уровень*/
                    damage={props.heartCollab} /*Нанести урон*/
                    newMind={props.setMind} /* Поставить новую мысль*/
                    useItem={props.useItem_AC} /* Использовать предмет*/
                    level={props.levelReducer[props.gameReducer.currentLevel].options} /* Поставить уровень */
                />
            </div>
        </div>
    </div>
}

let mapStateToProps = (state) => ({
    bagReducer: state.bag,
    expReducer: state.exp,
    gameReducer: state.game,
    levelReducer: state.level,
});

export default connect(mapStateToProps, {
    heartCollab,
    setLevel,
    setMind,
    nextLevel,
    addItem_AC,
    useItem_AC,
    setExp,
    hideOption
})(App);
