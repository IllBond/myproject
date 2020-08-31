import React, {Component, useState} from "react";


class Game extends Component {

    xxx = () => {
        if (document.getElementById('canvas')) {
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            let width = canvas.width;
            let height = canvas.height;
            let blockSize = 50;

            let widthInBlock = width / blockSize;
            let heightInBlock = height / blockSize;
            let score = 0;

            let drawBorder = function () {
                ctx.fillStyle = 'Gray';
                ctx.fillRect(0, 0, width, blockSize);
                ctx.fillRect(0, height - blockSize, width, blockSize);
                ctx.fillRect(0, blockSize, blockSize, height);
                ctx.fillRect(width - blockSize, 0, blockSize, height);
            };

            let drawScore = function () {
                ctx.font = '20px Courier';
                ctx.fillStyle = 'Black';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                ctx.fillText(`Счет ${score}`, 25, 25);
            };


            let gameOver = function () {
                clearInterval(intervalId);
                ctx.font = '60px Courier';
                ctx.fillStyle = "Black";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText("The End", width / 2, height / 2) // вывродит текст конец игры
            };

            let circle = function (x, y, radius, fillCircle) {
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2, false)
                if (fillCircle) {
                    ctx.fill()
                } else {
                    ctx.stroke()
                }
            };

            let Block = function (col, row) {
                this.col = col;
                this.row = row;
            };

            Block.prototype.drawSquare = function (color) {
                let x = this.col * blockSize;
                let y = this.row * blockSize;
                ctx.fillStyle = color;
                ctx.fillRect(x, y, blockSize, blockSize)
            };


            Block.prototype.drawCircle = function (color) {
                let centerX = this.col * blockSize + blockSize / 2;
                let centerY = this.row * blockSize + blockSize / 2;
                ctx.fillStyle = color;
                circle(centerX, centerY, blockSize / 2, true)
            };


            Block.prototype.equal = function (otherBlock) {
                return this.col === otherBlock.col && this.row === otherBlock.row;
            };

            let Snake = function () {
                this.segments = [
                    new Block(2, 5),
                    new Block(1, 5),
                    new Block(0, 5)
                ];
                this.direction = 'right';
                this.nextDirection = 'right'
            };

            Snake.prototype.draw = function () {
                for (let i = 0; i < this.segments.length; i++) {
                    this.segments[i].drawSquare("Blue");
                }
            };

            Snake.prototype.move = function () {
                let head = this.segments[0];
                this.direction = this.nextDirection;
                if (this.direction === 'right') {
                    var newHead = new Block(head.col + 1, head.row)
                } else if (this.direction === 'down') {
                    var newHead = new Block(head.col, head.row + 1)
                } else if (this.direction === 'left') {
                    var newHead = new Block(head.col - 1, head.row)
                } else if (this.direction === 'up') {
                    var newHead = new Block(head.col, head.row - 1)
                }

                if (this.checkCollision(newHead)) {
                    gameOver();
                    return;
                }

                this.segments.unshift(newHead);
                if (newHead.equal(apple.position)) {
                    score++;
                    apple.move()
                } else {
                    this.segments.pop()

                }
            };

            Snake.prototype.checkCollision = function (head) {
                let leftCollision = (head.col === 0);
                let topCollision = (head.row === 0);
                let rightCollision = (head.col === widthInBlock - 1);
                let bottomCollision = (head.row === heightInBlock - 1);
                let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
                let selfCollision = false;
                for (let i = 0; i < this.segments.length; i++) {
                    if (head.equal(this.segments[i])) {
                        selfCollision = true;
                    }
                }
                return wallCollision || selfCollision;
            };


            Snake.prototype.setDirection = function (newDirection) {
                if (this.direction === "up" && newDirection === "down") {
                    return
                } else if (this.direction === "right" && newDirection === "left") {
                    return
                } else if (this.direction === "left" && newDirection === "right") {
                    return
                } else if (this.direction === "down" && newDirection === "up") {
                    return
                }
                this.nextDirection = newDirection
            };


            let Apple = function () {
                this.position = new Block(1, 6);
            };

            Apple.prototype.draw = function () {
                this.position.drawCircle("LimeGreen");
            };

            Apple.prototype.move = function () {
                let randomCol = Math.floor(Math.random() * (widthInBlock - 2) + 1);
                let randomRow = Math.floor(Math.random() * (heightInBlock - 2) + 1);
                this.position = new Block(randomCol, randomRow)
            };

            let direction = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };

            // eslint-disable-next-line no-undef
            jQuery('body').keydown(function (event) {
                let newDirection = direction[event.keyCode];
                // console.log(newDirection)
                if (newDirection !== undefined) {
                    snake.setDirection(newDirection);
                }
            });


            let snake = new Snake();
            let apple = new Apple();


            let intervalId = setInterval(function () {
                ctx.clearRect(0, 0, width, height);
                drawScore();
                snake.move();
                snake.draw();
                apple.draw();
                drawBorder(); //
            }, 200)
        }
    };

    componentDidMount() {
        this.xxx()
    }

    componentWillUnmount() {
    }

    render() {

        return <div>
            <h2>Управлене - стрелочки (← → ↑ ↓)</h2>
            <canvas id="canvas" width="500" height="500">

            </canvas>
        </div>
    }
}


export default Game