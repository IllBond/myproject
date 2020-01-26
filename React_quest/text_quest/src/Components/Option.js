import React from 'react';
import VARIBLES from "../Components/VARIBLE";

const v = VARIBLES.if;
const i = VARIBLES.items;


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
                    if (lng.some(x => x === item[i][0])) {
                        console.log('Такой предмет уже есть, зачем мне еще один')
                    } else {
                        props.item(item[i][0])
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

    let StepCollab = () => {
            props.stepCollab()
    };

    /*Использоваьть предмет*/
    /*Или несколкьо предметов мы передаем массив и перебераем их через map*/
    let use_Item = (item) => {
        if (item) {
            item.map(x => {
                    props.useItem(x[0])
                }
            )
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
                    props.exp(exp[i][0])
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
        {props.level.map(item => {

                let click = () => {
                    hide(item[1][0]); /*Добавить элемент в спсиок нажимаемых*/
                    newMind(item[1][1]); /*Установить новую мысль*/
                    getOption(item[2][0], props.bag); /*Добавить предмет*/
                    get_exp(item[2][1], props.expItem); /*Получить опыт*/
                    use_Item(item[2][2]); /*Использовать предмет*/
                    dmg(item[3]); /*Получить урон*/
                    newLevel(item[4]); /* Перейти на уровень #*/
                    StepCollab()
                };

                let clickTwoMind = () => {
                    newMind(item[1][2]); /*Установить новую мысль*/
                    dmg(item[3]); /*Получить урон*/
                };

                // Первая проверка часть 1
                let show = item[0][0] === v.TRUE; // Отрисовывать?
                let oneOfBag = item[0][0] === v.ONCE && props.bag.some(x => item[0][1].some(y => y[0] === x));
                let oneOfExp = item[0][0] === v.ONCE && props.expItem.some(x => item[0][1].some(y => y[0] === x));
                let ONCE = show || oneOfBag || oneOfExp; // Если есть один из предметов
                // Первая проверка часть 1


                // Первая проверка часть 2
                let arrBagExp = []; // пустой вспомогательный массив. Нужен для наполнения его true И false для дальнейшего взаимодействия. А именно нам нужно что бы все элементы были true
                // склеиваем содержиаое рюкзака и опыта
                // каждый требуемы элемент сравниваем с тем что есть в рюкзаке. Если есть то добавляем true или нет то false
                if (item[0][0] === v.ALL) {
                    let bagAndExp = props.bag.concat(props.expItem);
                    item[0][1].map(x => arrBagExp.push(
                        bagAndExp.some(y => y === x)
                    ));
                }
                // Ищем хотя бы один false если его нет то значит все отлично результат вернуться FALSE и мы его перевернем для того что бы вернулось true
                // в результате если все требуемы предметы есть в рюкзаке условие авпоняется
                let AllInBag = !(arrBagExp.length > 0 ? arrBagExp.some(x => x === false) : true);
                let ALL = show || AllInBag; // Если есть все предметы
                // Первая проверка часть 2

                //Вторая проверка
                let touched = props.hide.some(x => x === item[1][0]); // Отслеживает нажата ли?
                //Вторая проверка

                //Третья проверка
                let defaultHide = item[5] && !(ALL || ONCE); // Скрыть по умолчанию?
                //Третья проверка

                //Четвертая проверка
                let touchedHide = props.hide.some(x => x === item[1][0]) && item[6]; // Скрывать навсегда нажатия?
                //Четвертая проверка

                // Пятая проверка Часть 1
                let haveOnceItem = item[7][0] === v.ONCE && (props.bag.some(x => item[7][1].some(y => y[0] === x)) || props.expItem.some(x => item[7][1].some(y => y[0] === x)));
                // Пятая проверка Часть 1

                // Пятая проверка Часть 2
                let arrhaveOfItem = []
                    if (item[7][0] === v.ALL) {
                    let bagAndExp = props.bag.concat(props.expItem);
                    item[7][1].map(x => arrhaveOfItem.push(
                        bagAndExp.some(y => y === x)
                    ));
                }
                let haveAllItem = !(arrhaveOfItem.length > 0 ? arrhaveOfItem.some(x => x === false) : true);

                switch (true) {
                    //Обычеая отрисовка
                    case (haveOnceItem || haveAllItem):
                        return <div key={'id' + Math.random()}></div>;
                        break;
                    case (defaultHide):
                        return <div key={'id' + Math.random()}></div>;
                        break;
                    case (touchedHide):
                        return <div key={'id' + Math.random()}></div>;
                        break;
                    case (touched):
                        return <button className={'grey'}  key={'id' + Math.random()} onClick={click}>
                            {item[1][0]}
                        </button>
                        break;
                    case (ALL || ONCE):
                        return <button onClick={click} key={'id' + Math.random()}>
                            {item[1][0]}
                        </button>;
                        break;
                    default:
                        return <button onClick={clickTwoMind} className={'rouse'} key={'id' + Math.random()}>
                            {item[1][0]}
                        </button>;
                        break
                }
            }
        )}
    </div>
}

export default Option;
