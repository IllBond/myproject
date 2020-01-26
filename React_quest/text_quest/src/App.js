import React from 'react';
import './App.css';
import Heart from "./Components/Heart";
import Mind from "./Components/Mind";
import Say from "./Components/Say";
import Option from "./Components/Option";
import Image from "./Components/Image";
import {connect} from "react-redux";
import {heartCollab, StepCollab, hideOption, nextLevel, setLevel, setMind} from "./redux/gameReducer";
import {addItem_AC, useItem_AC} from "./redux/bagReducer";
import {setExp} from "./redux/expReducer";
import Item from "./Components/Item";
import VARIBLES from "./Components/VARIBLE";
import Step from "./Components/Step";


const v = VARIBLES.if;
const i = VARIBLES.items;


function App(props) {
    console.log(props.expReducer.exp)

    return <div>

        <a name={'start'}></a>
        {/*<div>*/}
        {/*    <button onClick={() => {*/}
        {/*        props.setLevel(0)*/}
        {/*    }}>Телепортироваться в начало уровня*/}
        {/*    </button>*/}
        {/*</div>*/}

        <div id='flex-container'>
            {/*ПОЛЕ №1*/}
            <div className={'bigFont'}>
                <div className={'borderMarginPadding'}>
                    <Heart heart={props.gameReducer.heart}/>
                    <Step step={props.gameReducer.step}/>
                </div>
            </div>
            {/*ПОЛЕ №2*/}
            <div>
                <div>
                    <div className={'borderMarginPadding'}>
                        <div className={'items'}>
                            {props.bagReducer.bag.map((item) => <span key={'id' + Math.random()}>{
                                    <Item dropItem={props.useItem_AC} item={item} img={i[item][2]}/>
                                }</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/*ПОЛЕ №3*/}
            <div>
                <div className={'borderMarginPadding'}>
                    <Image img={props.levelReducer[props.gameReducer.currentLevel].img}/>
                </div>

            </div>
            {/*ПОЛЕ №4*/}
            <div>
                <div className={'borderMarginPadding'}>
                    <div className={'text'}>
                        <Say text={props.levelReducer[props.gameReducer.currentLevel].text}/>
                    </div>
                    <div className={'mind'}>
                        <Mind mind={props.gameReducer.currentMind}/>
                    </div>
                </div>
            </div>
            {/*ПОЛЕ №5*/}
            <div>
                <div className={'borderMarginPadding'}>
                    <Option
                        hide={props.gameReducer.hide} /*Элементы которые уже нажимались*/
                        bag={props.bagReducer.bag} /*Содержимое Рюкзака*/
                        expItem={props.expReducer.exp} /*Опыт*/
                        hideOption={props.hideOption} /*Добавить в элементы котоыре уже нажимались*/
                        item={props.addItem_AC} /*Добавить предмет*/
                        exp={props.setExp}  /*Добавить Опыт*/
                        nextLevel={props.setLevel} /*Перейти на уровень*/
                        damage={props.heartCollab} /*Нанести урон*/
                        stepCollab={props.StepCollab} /*Нанести урон*/
                        newMind={props.setMind} /* Поставить новую мысль*/
                        useItem={props.useItem_AC} /* Использовать предмет*/
                        level={props.levelReducer[props.gameReducer.currentLevel].options} /* Поставить уровень */
                    />
                </div>
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
    StepCollab,
    setLevel,
    setMind,
    nextLevel,
    addItem_AC,
    useItem_AC,
    setExp,
    hideOption
})(App);
