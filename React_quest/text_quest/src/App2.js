import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {heartCollab, hideOption, nextLevel, setLevel, setMind} from "./redux/gameReducer";
import {addItem_AC, useItem_AC} from "./redux/bagReducer";
import {setExp} from "./redux/expReducer";
import VARIBLES from "./Components/VARIBLE";
import SmallImage from "./Components/SmallImage";
import levelReducer from "./redux/levelReducer";


const v = VARIBLES.if;
const i = VARIBLES.items;


function App(props) {

    return <div>
        <div className='menuLevel_fixed'>
            <a href="#start" className={'menuLevel'}>Начало</a>
            <a href="#shop" className={'menuLevel'}>SHOP</a>

            {props.levelReducer.map((key, index)=>  <a className={'menuLevel'} href={'#lvl_' + index}>{key.text[0][1] + ' #'+ index}</a>)}
        </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
        {Object.keys(i).map((key) => <div key={'id' + Math.random()} className={'bgWhite'}>
            <a name={'shop'}></a>
            <div id={'flex-container-forTest'}>
                <div>
                    <div><b><p contentEditable>{key}</p></b></div>
                    <div>{i[key][0]}</div>
                    <div>{i[key][1]}</div>
                    <div>{i[key][3]}</div>
                </div>
                <div>
                    <img src={i[key][2]} width='100' alt=""/>
                </div>
            </div>
        </div>)}

        {props.levelReducer.map((key, index) => <div key={'id' + Math.random()}>
            <div className={'razdelitel'}></div>
            <a name={'lvl_'+ index}></a>
            <div className={'bgWhite border'}>
                <div className={'center'}>
                    <h2 className={'bgWhite'}>{key.text.map(x=> !x[0] ? <div>{x[1]}</div> : <div className={'grey'}>{x[1]}</div>
                    )}</h2>
                    <h1 className={'bgWhite'}># {index}</h1>
                </div>
                <div id={'flex-container-forTestlvl'}>

                    <div>
                        <div id={'flex-container-forTestopton'}>
                            {key.options.map(item => <>
                                <>
                                    <div key={'id' + Math.random()} className={'option1 border'}>

                                        <div className={'xxx border'}>
                                            {/*Хватает*/}
                                            <div className={'width20'}>
                                                {
                                                item[0][0] === v.ALL ?
                                                    <div>Нужно <b>Все</b></div> :
                                                    item[0][0] === v.ONCE ?
                                                        <div><b>1 Из</b></div> : 'Хватает'
                                            }
                                            </div>
                                            {/*Не хватает*/}
                                            <div className={'width80'}>1
                                                {
                                                    item[0][1] ?
                                                        item[0][1].map(x => <SmallImage title={x[1]} key={'id' + Math.random()} img={x[2]}/>) : ''
                                                }
                                            </div>
                                        </div>

                                        {/*Разрешено*/}
                                        <div className={'xxx border'}>
                                            <div className={'width20'}>
                                                {
                                                    item[7][0] === v.ALL ?
                                                        <div>Запрещено <b>ВСЕ</b></div> :
                                                        item[7][0] === v.ONCE ?
                                                            <div>Запрещено <b>1 Из</b></div>  :
                                                            item[7][0] === v.TRUE ?
                                                                'ОШИБКА В РЕДЮСЕРЕ' :
                                                                'Разрешено'

                                                }
                                            </div>


                                            <div className={'width80'}>
                                                {
                                                    item[7][1] ?
                                                        item[7][1].map(x => <SmallImage title={x[1]} key={'id' + Math.random()} img={x[2]}/>) : ''
                                                }
                                            </div>
                                        </div>

                                        {/*Спецопции*/}
                                        <div className={'xxx border'}>
                                            <div className={item[3] > 0 ?
                                                'width25 border center bgGreen' :
                                                (item[3] < 0) ?
                                                    'width25 border center bgRed' :
                                                    'width25 border center '}><h1>-</h1>

                                            </div>
                                            <div className={'width25 border center'}>
                                                {
                                                    item[4] ? <h1 className={'red'}>{item[4]? 'lvl' +item[4]:'-'}</h1> : <h1>-</h1>
                                                }
                                            </div>
                                            <div className={item[5] ?
                                                'width25 border center bgBlue' :
                                                'width25 border center'}><h1>-</h1></div>
                                            <div className={item[6] ?
                                                'width25 border center bgYellow' :
                                                'width25 border center'}><h1>-</h1></div>
                                        </div>
                                        {/*Дадут предмет*/}
                                        <div className={'xxx border'}>
                                            <div className={'width20'}>Дадут предмет</div>
                                            <div className={'width80'}>
                                                {
                                                    item[2][0] ?
                                                        item[2][0].map(x => <SmallImage title={x[1]} key={'id' + Math.random()} img={x[2]}/>) : ''
                                                }
                                            </div>
                                        </div>
                                        {/*Датут EXP*/}
                                        <div className={'xxx border'}>
                                            <div className={'width20'}>Датут EXP</div>
                                            <div className={'width80'}>
                                                {
                                                    item[2][1] ?
                                                        item[2][1].map(x => <SmallImage  title={x[1]} key={'id' + Math.random()} img={x[2]}/>) : ''
                                                }
                                            </div>
                                        </div>
                                        {/*Заберут*/}
                                        <div className={'xxx border'}>
                                            <div className={'width20'}>Заберут</div>
                                            <div className={'width80'}>
                                                {
                                                    item[2][2] ?
                                                        item[2][2].map(x => <SmallImage title={x[1]} key={'id' + Math.random()} img={x[2]}/>) : ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/*Диалоги*/}
                                    <div className={'option2 border'}>
                                        <div className={'pad'}>
                                            <div className={'border'}>
                                                {item[1][0].map(option => <div key={'id' + Math.random()}><h3>{option}</h3></div>)}
                                            </div>
                                            <div className={'border'}>
                                                {item[1][1].map(key => !key[0] ?
                                                    <div className={'grey'} key={'id' + Math.random()}>{key[1]}<br/></div> :
                                                    key[0] == 2 ? <div className={'borderOB_name'} key={'id' + Math.random()}>{key[1]}<br/></div> :
                                                    <div key={'id' + Math.random()}>{key[1]}<br/></div>)}
                                            </div>
                                            <div className={'border'}>
                                                {item[1][2].map(key =>!key[0] ?
                                                    <div className={'text_decor altMind'} key={'id' + Math.random()}>{key[1]}<br/></div> :
                                                    <div className={'altMind'} key={'id' + Math.random()}>{key[1]}<br/></div>)}
                                            </div>
                                        </div>

                                    </div>
                                    <div className={'option3 razdelitel2'}></div>
                                </>


                            </>)}
                        </div>
                    </div>
                    <div>
                        <img src={key.img} width='100%' alt=""/>

                    </div>
                </div>
            </div>


        </div>)}

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
