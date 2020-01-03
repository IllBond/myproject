import React, {Component} from 'react';
import Board from "./Component/board";
import './Game.css'

//Логи определения победителя
import calculateWinner from "./Helper/calculateWinner";


//Классовый компонент который отресуется в index
class Game extends Component {
    //State
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true, // Сейчас X или 0
            stepNumber: 0, // Текущий шаг
            // Нулевое значение поля squares будет следующим
            /* ********************************************************
            ***********************************************************
            ***********************************************************
            Базовое состояние
            history: [{
                squares: [null, null, null, null, null, null, null, null, null]
            }]

            Состояние через 2 хода
            history: [{
                squares: [null, null, null, null, null, null, null, null, null]
                squares: [null, 'X', null, null, null, null, null, null, null]
                squares: [null, 'X', null, null, null, '0', null, null, null]
                ...

            Благодоря этому можно сделать рендер на основе любого состояние
            }]
            ***********************************************************
            ***********************************************************
            ******************************************************** */
            history: [{  // История
                squares: Array(9).fill(null) // Пустой массив с 9ю пустыми полями
            }]
        };
    }

    // Рычаг срабатывающий при клике
    handleClick = (i) => {

        //Запрагиваем каой сейчас ход и историю
        const {xIsNext, history} = this.state;
        //Смотрим какой у нас в истории последний шаг
        const current = history[history.length - 1];
        // const squares = current.squares.slice();
        // Содержимое последнего шага записываекм в squares
        const squares = [...current.squares];

        // Дополнительная проверка
        if (calculateWinner(squares) || squares[i]) {
            //Оставноиться если игра уже выиграна иди если пытаешься перезаписать поле
            return;
        }

        // В содержимаое последнего шага запишем в соостветствующую ячейку x или o
        squares[i] = xIsNext ? 'X' : '0';

        // Изменить state классового компонента
        this.setState({
            xIsNext: !xIsNext, // помеянем true на false или наоборот
            // history: history.concat([{squares}]),
            history: [...history, {squares}], // Итсория равна истории скопированной в новой обьект + новое состояние поля с
            stepNumber: ++this.state.stepNumber // Шаг +1
        })
    };


    // Работа с историей
    paintMoves(history) {
        return this.state.history.map((step, move) => {
            const desc = move ? ('Move #' + move) : 'Game start';
            return (
                <li key={move}>
                    <a href='#' onClick={() => {
                        this.jumpTo(move,history)
                    }}>{desc}</a>
                </li>
            )
        })
    }

    jumpTo(step,history) {
        let newHistory = history.splice(step+1, history.length-step)
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true
        })
    };


    render() {
        // Для рендера нужны какие то данные. Для того что бы показать кто сейчас ходит, для показа последнего шага или любого другого по запросу, берем шаг и историю
        const {xIsNext, stepNumber, history} = this.state;
        // Массив с текущими шагами на основен их будет вестись отрисовка
        const current = history[stepNumber];
        // true или false что бы показать победителя или кто следующий ходит
        let winner = calculateWinner(current.squares);
        let status;

        if (winner) {
            status = 'Winner ' + winner
        } else {
            status = 'Next player is: ' + (xIsNext ? 'X' : '0')
        }

        //Передали дальше функцию для onclick
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board
                        squares={current.squares}
                        onClick={this.handleClick}
                    />
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                    <div>{this.paintMoves(history)}</div>
                </div>
            </div>
        );
    }
}

export default Game;
