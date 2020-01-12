import React from 'react';

function Option(props) {

    /*
    Добавить предмет
    Принимает массив подобраных предметов
    Принимает текущее состояние рюкзака
    Если предметы есть то выполняем код. Иначе забиваем
    Если предметов больше 10 то забиваем. Если меньше то выполняем код
    В зависимости от того сколько предметов мы взяли сделаем проверку на каждый раз.
    Если такой элемент есть в рюкзаке добавить его в инвентарь если нет не добавлять
    */

    let getOption = (item, lng) => {
        if (item) {
            if (lng.length >= 10) {
                alert('Закончилось место')
            } else {
                for (let i = 0; i < item.length; i++) {
                    if (lng.some(x => x === item[i])) {
                        console.log('Такой предмет уже есть, зачем мне еще один')
                    } else {
                        props.item(item[i])
                    }
                }
            }
        }
    };


    //Нанести урон или отхилить в зависимости от значения damage
    let dmg = (damage) => {
        if (damage) {
            props.damage(damage)
        }
    };

    /*Использоваьть предмет*/
    /*Или несколкьо предметов мы передаем массив и перебераем их через map*/
    let use_Item = (item) => {
        if (item) {
            item.map(x => props.useItem(x))

        }
    };


    /* Поставить новую мысль*/
    let newMind = (mind) => {
        if (mind) {
            props.newMind(mind)
        }
    };

    /*Перейти на уровень в зависомости от номера урвоня*/
    let newLevel = (level) => {
        if (level) {
            props.nextLevel(level)
        }
    };


    /*Добавить Опыт
    Принимает массив опыта
    Принимает текущее состояние рюкзака
    Если есть значение идем дальше
    В зависимости от к-ва опытов делаем необходиомое к-во проверок
    Если эл-т есть в рюкзаке то ничего не делаем если нету то добавляем в рюкхак
    */

    let get_exp = (exp, lng) => {
        if (exp) {
            for (let i = 0; i < exp.length; i++) {
                if (lng.some(x => x === exp[i])) {
                    console.log('Такой опыт уже есть, зачем мне еще один')
                } else {
                    props.exp(exp[i])
                }
            }

        }
    };

    /*Добавить в элементы котоыре уже нажимались*/
    let hide = (x) => {
        props.hideOption(x)
    };


    return <div>

        {/*Отрисовываем игровые опции*/}
        {props.level.map(item =>
            // Первая проверка
            // Решаем будет поле серым или обычным
            // item[0] содержит массив необходимый
            (props.bag.some(x => item[0].some(y => y === x)) || props.expItem.some(x => item[0].some(y => y === x)) || item[0].some(y => y === true))
                ? (!(props.hide.some(x => x === item[1]) && item[10]) ? (props.bag.some(x => item[0].some(y => y === x)) || props.expItem.some(x => item[0].some(y => y === x)) || !item[9] ?
                ((props.bag.some(x => item[11].some(y => y === x)) || props.expItem.some(x => item[11].some(y => y === x))) ? '' :
                    <div key={'key' + Math.random()}>
                        <button className={
                            // Если кнопка нажималась то станет красным
                            (props.hide.some(x => x === item[1]) ? 'clicked' : '')
                        }
                                onClick={() => {
                                    hide(item[1]); /*Добавить элемент в спсиок нажимаемых*/
                                    newMind(item[2]);/*Установить новую мысль*/
                                    getOption(item[4], props.bag) /*Добавить предмет*/
                                    get_exp(item[5], props.expItem) /*Получить опыт*/
                                    use_Item(item[6]); /*Использовать предмет*/
                                    dmg(item[7]); /*Получить урон*/
                                    newLevel(item[8]) /* Перейти на уровень #*/
                                }}>{item[1]}</button>
                    </div>)
                : true) : '') : (!(props.hide.some(x => x === item[1]) && item[10]) ? (props.bag.some(x => item[0].some(y => y === x)) || props.expItem.some(x => item[0].some(y => y === x)) || !item[9] ?
                <div key={'key' + Math.random()}>
                    <button className={"grey"} onClick={() => {
                        newMind(item[3]) /*Установить новую мысль*/
                    }}>{item[1]}</button>
                </div> : '') : '')
        )}
    </div>
}

export default Option;
