


let field = document.createElement('div'); //Создаем 1 элемент div, и записали в переменную
field.classList.add('field') //Для div внутри переменной field добавили класс field 
document.body.appendChild(field); //В конце body вставили содержимое переменной 


for (let i = 1; i<=100; i++) { //Внутрь поля field вставили аналогичным методом 100 div с кдлассом excel
	let excel = document.createElement('div');
	excel.classList.add('excel')
	field.appendChild(excel) // Вставляем этот дим один за одним
	
}



 // Имеем право создать переменную excel хотя уже создавали переменную с таким именем. 
 // В переменную excel записываепм все элементы с классом excel. 
 // И это массив.
let excel = document.getElementsByClassName('excel');

//Задаем парамеры первого div 1 и 10, соответственно следующий элемент будет 2 и 10, а как только элемент достигнит конце, 10 и 10 то "X" снова сброситься до 1 а "Y" станет 9
let x = 1;
	y = 10;

for (let i=0; i<excel.length ; i++) {
//Цикл выполняеться столько раз сколько у нас элементов в массиве
	if (x>10) {
		//Если "X" стал больше 10 то сбросить его до 1 и уменьщить "Y"
		x = 1;
		y--;
	}

	excel[i].setAttribute('posX', x);
	excel[i].setAttribute('posY', y);
	x++;
}



//Появление змейки генерации координат
function generateSnake() {
	let posX = Math.round(Math.random() * (10 - 3) + 3); //Генирируем число от 0 до 1 потом умножаем его на 1, 2 ... 9 прибовляем 1. В итоге имеем число от 1 до 9
	let posY = Math.round(Math.random() * (10 - 1) + 1);
		return [posX, posY];
}

let coordinates = generateSnake()


// Сложный синтаксис, что получаем
// Найти элемент где есть селлектор posX = X & posY = Y  


let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'),
document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "' + coordinates[1] + '"]'),
document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + coordinates[1] + '"]')];


if (snakeBody[0].classList.contains('wall')) {
	let coordinates = generateSnake()
	let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'),
	document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "' + coordinates[1] + '"]'),
	document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + coordinates[1] + '"]')];
	proverka ()
}



//Всем значениям snakeBody[0] snakeBody[1] snakeBody[2] натянгули шкуру, черную, присовили класс snakeBody
for (let i = 1 ; i<snakeBody.length;i++) {
	snakeBody[i].classList.add('snakeBody');
}

//Нулевому значению snakeBody[0] натянули голову через класс head
snakeBody[0].classList.add('head')




//Создали переменную мышь
let mouse;

//функция создалась
function createMouse () {
	//Генирируем мышь
	function generateMouse() {
		//Генирируем 2 числа для мыши
		let posX = Math.round(Math.random() * (10 - 3) + 3); //Генирируем число от 0 до 1 потом умножаем его на 1, 2 ... 9 прибовляем 1. В итоге имеем число от 1 до 9
		let posY = Math.round(Math.random() * (10 - 1) + 1);
		return [posX, posY];
	}

	//Записываем в массив mouseCoordinates 2 числа
	let mouseCoordinates = generateMouse();
	//Найти селектор у которого posX = X и posY = Y
	mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]')

	// Цикл Проверяет если селектор с классом  snakeBody уже содержит mouse то генирируем новые координаты
	while ((mouse.classList.contains('snakeBody'))) {
		let mouseCoordinates = generateMouse();
		mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]')
	}



	//Добавляем класс mouse сеооектору у котороого posX = X и posY = Y
	mouse.classList.add('mouse')
}

//Вызываем функцию
createMouse();
let direction = 'right';
let steps = false

let input = document.createElement('input')
document.body.appendChild(input)
input.style.cssText = `
margin: auto;
margin-top: 40px;
font-size: 20px;
display: block;
`

let input2 = document.createElement('input')
document.body.appendChild(input2)
input2.style.cssText = `
margin: auto;
margin-top: 40px;
paddding-left: 200px;
font-size: 20px;
display: none;
width: 500px;
`

message = ['2', '1']

let score = 0;
input.value = `Ваши очки: ${score}`;
input2.value = ``;
let speed = 200;
//Создаем функцию движения змеи
function move () {
	//Создали переменную, записали в нее атрибут posX и posY , это текущие гоординаты головы
	//Достаем кооррдинаты текущего положения головы
		let snakeCoordinate = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
	//Удаляем с ячейки координат головы head
		snakeBody[0].classList.remove('head');
	//Удаляем с ячейки кончика хвоста snakeBody, длина всего тела минус 1 (с учетом что счет начинаеться с нуля)
		snakeBody[snakeBody.length-1].classList.remove('snakeBody');
	//Убираем последнее значение массива snakeBody. Селектор хвоста
		snakeBody.pop();
	//цикл провера. Если голова упреться в стенку она переместиться в противоположную строну
			if (direction == 'right') {
				if (snakeCoordinate[0] < 10) {
					snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinate[0] + 1) + '"][posY = "' + snakeCoordinate[1] + '"]'));
					snakeBody[0].classList.add('head');
				} else {
					snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinate[1] + '"]'));
					snakeBody[0].classList.add('head');
				}
			} else 	if (direction == 'left') {
				if (snakeCoordinate[0] > 1) {
					snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinate[0] - 1) + '"][posY = "' + snakeCoordinate[1] + '"]'));
					snakeBody[0].classList.add('head');
				} else {
					snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + snakeCoordinate[1] + '"]'));
					snakeBody[0].classList.add('head');
				}
			} else 	if (direction == 'up') {
				if (snakeCoordinate[1] < 10) {
					snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinate[0] + '"][posY = "' + (+snakeCoordinate[1] + 1) + '"]'));
					snakeBody[0].classList.add('head');
				} else {
					snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinate[0] + '"][posY = "1"]'));
					snakeBody[0].classList.add('head');
				}
			} else 	if (direction == 'down') {
				if (snakeCoordinate[1] > 1) {
					snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinate[0] + '"][posY = "' + (+snakeCoordinate[1] - 1) + '"]'));
					snakeBody[0].classList.add('head');
				} else {
					snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinate[0] + '"][posY = "10"]'));
					snakeBody[0].classList.add('head');
				}
			}
		//Повторить процедуру для snakeBody[1] snakeBody[2] snakeBody[3] и т д
		for (let i = 1; i < snakeBody.length; i++) {
		//Присвоить snakeBody каждому элементы
		snakeBody[i].classList.add('snakeBody');
	}

		if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')) {

		mouse.classList.remove('mouse');
		let a = snakeBody[snakeBody.length - 1].getAttribute('posX')
		let b = snakeBody[snakeBody.length - 1].getAttribute('posY')
		snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'))
		createMouse();
		score++;
		input.value = `Ваши очки: ${score}`
		let rnd = Math.round(Math.random() * ((message.length-1) - 1) + 1)
		input2.value = `${message[rnd]}`
	}
		if (snakeBody[0].classList.contains('snakeBody')) {
			setTimeout(() => {alert('Бееее....')}, 300)
			clearInterval(interval);
			snakeBody[0].classList.add('lost')
			setTimeout(function(){ location.reload(); }, 1000)

		}

		
		
		steps = true

}

//Повторят функцию 3 раза в секунду
let interval = setInterval(move, speed)

window.addEventListener('keydown', function(e){
if (steps == true) {
	if (e.keyCode == 37 && direction != 'right') {
		direction = 'left';
		steps = false
	} else if (e.keyCode == 38 && direction != 'down') {
		direction = 'up';
		steps = false
	} else if (e.keyCode == 39 && direction != 'left') {
		direction = 'right';
		steps = false
	} else if (e.keyCode == 40 && direction != 'up') {
		direction = 'down';
		steps = false
	} 
}
	console.log(direction)
});