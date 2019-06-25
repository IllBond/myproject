let overlay = document.querySelector('.overlay')
let modal = document.querySelector('.modal')
let speed = 0;

modal.addEventListener('click', function(e) {
	if (e.target.classList.contains('easy')) {
		speed = 1000;
	} else if (e.target.classList.contains('normal')) {
		speed = 500;
	} else if (e.target.classList.contains('hard')) {
		speed = 200;
	}

	if (e.target.classList.contains('button')) {
		modal.style.display = 'none';
		overlay.style.display = 'none';
		startgame()
	}
})


function startgame() {
	let tetris = document.createElement('div')
	tetris.classList.add('tetris')
	//В переменную тетрис записали div и добавили класс тетрис

	for (let i = 1; i <= 180; i++) {
		let excel = document.createElement('div')
		excel.classList.add('excel')
		tetris.appendChild(excel)
	}
	//180 раз повторили создали div с классом excel , затем столько же раз обращаемся к tetris и добавляем туда div class=excel

	let main = document.getElementsByClassName('main')[0]
	main.appendChild(tetris)
	//В главный div main вставили tetris со всем его содержимым 

	excel = document.getElementsByClassName('excel');
	let i = 0;
	// в excel записали абсолютно все div class='excel'


	for (let y = 18; y > 0; y--) {
		for (let x = 1; x < 11; x++) {
			excel[i].setAttribute('posX', x);
			excel[i].setAttribute('posY', y);
			i++;
		}
	}
	// Массив делает следующее
	// div1 = ставим атрибут posX = 1 , posY = 18
	// div2 = ставим атрибут posX = 1 , posY = 17
	//...
	// div18 = ставим атрибут posX = 1 , posY = 0
	//...
	//div46 = ставим атрибут posX = 2 , posY = 18
	//div47 = ставим атрибут posX = 2 , posY = 17
	//...
	//div48 = ставим атрибут posX = 2 , posY = 0
	//...
	//div180 = ставим атрибут posX = 10 , posY = 1


	//Задаем точку где координаты будут начинаться, в дальнейшщем к ним будем прибавлять знгачнеия из вложенных массиово
	let x = 5 , y = 15;


	//во вложенный массив записываем кординаты, они будут в дальнейшем прибавляться к текущим кординатам x, y
	//Пример работы с координатами в папке с проектом
	//Фигура mainArr[0] mainArr[1] mainArr[2] (При этом наало это 0,0 это x = 5 , y = 15)

	//mainArr[0][0],mainArr[0][1],mainArr[0][2] палка
	//mainArr[1][0],mainArr[0][1],mainArr[0][2] квадрат
	//mainArr[2][0],mainArr[0][1],mainArr[0][2] L
	//mainArr[3][0],mainArr[0][1],mainArr[0][2] L наобороот
	//mainArr[4][0],mainArr[0][1],mainArr[0][2] молния
	//mainArr[5][0],mainArr[0][1],mainArr[0][2] молния наоборот
	//mainArr[6][0],mainArr[0][1],mainArr[0][2] трехпалочная

	//mainArr[x][3][0],mainArr[x][3][1],mainArr[x][3][2],mainArr[x][3][3] данные о повороте
	let mainArr = [
		//Палка
		[
			[0, 1], [0, 2], [0, 3],		
			[[-1,1], [0,0], [1,-1], [2,-2]], 
			[[1,-1], [0,0], [-1,1], [-2,2]], 
			[[-1,1], [0,0], [1,-1], [2,-2]], 
			[[1,-1], [0,0], [-1,1], [-2,2]],
		], 
		//Квадрат
		[
			[1, 0], [0, 1], [1, 1], 
			[[0,0], [0,0], [0,0], [0,0]], 
			[[0,0], [0,0], [0,0], [0,0]], 
			[[0,0], [0,0], [0,0], [0,0]], 
			[[0,0], [0,0], [0,0], [0,0]],
		],
		// L
		[
			[1,0], [0,1],[0,2], // начальные координаты
			[[0,0],[-1,1],[1,0],[2,-1]], //Поворот на 90
			[[1,-1],[1,-1],[-1,0],[-1,0]], //Поворот на 180
			[[-1,0],[0,-1],[2,-2],[1,-1]], //Поворот на 270
			[[0,-1],[0,-1],[-2,0],[-2,0]], //Поворот на 360
		],
			// Lобратныа
		[
			[1,0],[1,1],[1,2],
			[[0,1],[-1,0],[0,-1],[1,-2]], //Поворот на 180
			[[1,1],[0,2],[-1,1],[-2,0]], 
			[[1,-2],[2,-1],[1,0],[0,1]], 
			[[-2,0],[-1,-1],[0,0],[1,1]], 
		],
			// молния
		[
			[1,0],[0,1],[-1,1],
			[[0,0],[-1,1],[1,0],[2,1]],
			[[0,0],[1,-1],[-1,0],[-2,-1]],
			[[0,0],[-1,1],[1,0],[2,1]],
			[[0,0],[1,-1],[-1,0],[-2,-1]],
		],
			// молния наоборот
		[
			[1,0],[1,1],[2,1],
			[[2,-1],[0,0],[1,-1],[-1,0]],
			[[-2,0],[0,-1],[-1,0],[1,-1]],
			[[2,-1],[0,0],[1,-1],[-1,0]],
			[[-2,0],[0,-1],[-1,0],[1,-1]],
		],
			// затычка
		[
			[1,0],[1,1],[2,0],
			[[0,0],[-1,1],[0,0],[-2,2]],
			[[1,0],[0,0],[0,0],[2,-1]],
			[[1,0],[2,0],[0,0],[0,1]],
			[[-2,0],[-1,-1],[0,0],[0,-2]],
		],
	]


	let currentFigure = 0;
	let figureBody = 0;
	let rotate = 1;


	//Функция создания фигуры
	function create() {
		//Возхвращение рандомной цифры от 1 до (макс количество фигур)
		function getRandom(){
			return Math.round(Math.random()*(mainArr.length-1))
		}
		//Вызываем функцию рандомного числа и записывае чисор в currentFigure
		rotate = 1; // поворот
		currentFigure = getRandom() // переменная содержит координаты

		//Во вложенном массиве орбращаемся к mainArr[0] первая фгура, mainArr[1] вторая фгура и тд
		//figureBody создаем массив который всодержит в себе найденные div  с указнными координатами
		//[posX = 0][posY = 0]
		//[posX = 0][posY = 1]
		//[posX = 0][posY = 2]
		//[posX = 0][posY = 3]

		//илли

		//[posX = 0][posY = 0]
		//[posX = 1][posY = 0]
		//[posX = 0][posY = 1]
		//[posX = 1][posY = 1]
		figureBody = [ // в итге содержит какие то div
			document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
			document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
			document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
			document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`),
		];


		//через цико добавляем класс который разукрасит ячейки, срабоатет столкьо раз сколько в массиве figureBody элементов
		for (let i = 0; i < figureBody.length; i++) {
			//ОбращаемсЯ к любому div в figureBody и добавляем ему класс figure
			figureBody[i].classList.add('figure');
			//console.log(figureBody[0].getAttribute('posX'))
		}
	}

	//Вызываем функцию которая генирирует фигуру
	create();

	let score = 0;
	let input = document.getElementsByTagName('input')[0];
	input.value = `Ваши очки ${score}`
	//обхявляем ф-цию движения
	function move() {

		//Вспомогательная переменная
		let moveFlag = true;

		//Ранее созданные координаты забиваем в coordinates, теперь coordinates и figureBody равны
		let coordinates = [
			[figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
			[figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
			[figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
			[figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')],
		];

		//перебераем массивом, столько раз сколько значений у нас в массие coordinates. Каждое значение массива будем сравнивать на наличие сходства классов
		for (let i = 0; i < coordinates.length; i++) {
			//Если координата прикоснулась к низу или если текущий div содержит класс set то moveFlag = false и останавливаем выполнение цикла
			if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1]-1}"]`).classList.contains('set')) {
				moveFlag = false;
				break;
			}
		}

		//Если moveFlag = true 
		if (moveFlag) {
			//Перебераем массив столько раз сколько значений в массиве figureBody и удаляем у div классы figure
			for (let i = 0; i < figureBody.length; i++) {
				//ОбращаемсЯ к любому div в figureBody и удаляем ему класс figure
				figureBody[i].classList.remove('figure');
			}

			//Снова заполняем figureBody и уменьшаем координату на -1 ,  координаты вытягиваем из coordinates
			figureBody = [
				document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1]-1}"]`),
				document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1]-1}"]`),
				document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1]-1}"]`),
				document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1]-1}"]`),
			];

			// Теперь для div с новыми координатами через цико добавили класс figure
			for (let i = 0; i < figureBody.length; i++) {
				figureBody[i].classList.add('figure')
			}
		} else {
			//Если  moveFlag = false 
			//то через цикл заменяем класс figure на set у всех div внутри figureBody
			for (let i = 0; i < figureBody.length; i++) {
				figureBody[i].classList.remove('figure');
				figureBody[i].classList.add('set');
			}


			for (var i = 0; i < 4; i++) {
				for (let i = 1; i<15; i++) {
					let count = 0;

					//проверка и удаление блоков
					for (let k=1; k<11; k++) {
						if (document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')) {
							count++;
							if (count == 10) {
									score+=10
									input.value = `Ваши очки ${score}`

							
										for (let m = 1; m < 11; m++) {
											document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set')
										}
							
									
									let set = document.querySelectorAll('.set');
									let newSet = []
									for (let s=0; s<set.length; s++) {
										let setCoordinates = [set[s].getAttribute('posX'), set[s].getAttribute('posY')]
										if (setCoordinates[1] > i) {
											set[s].classList.remove('set');
											newSet.push(document.querySelector(`[posX = "${setCoordinates[0]}"][posY = "${setCoordinates[1]-1}"]`))
										}
									}
									for (let a = 0; a < newSet.length; a++) {
										newSet[a].classList.add('set')
								}
							}
						}
					}
				}
			}

			for (let n = 1; n < 11; n++) {
				if (document.querySelector(`[posX = "${n}"][posY = "15"]`).classList.contains('set')) {
					clearInterval(interval);
					alert(`проиграл, ваши очки${score}`);
					break;
				}
			}
			create();
		}
	}

	//Заствавлять двигаться каждый 0.3
	let interval = setInterval(() => {move()},speed)



	flag = true;

	//отслеживает нажатие кнопки
	window.addEventListener('keydown', function (e) {
		//в coordinates1,2,3.4 записываем координаты из соответствующих div
		let coordinates1 = [figureBody[0].getAttribute('posX'),figureBody[0].getAttribute('posY')];
		let coordinates2 = [figureBody[1].getAttribute('posX'),figureBody[1].getAttribute('posY')];
		let coordinates3 = [figureBody[2].getAttribute('posX'),figureBody[2].getAttribute('posY')];
		let coordinates4 = [figureBody[3].getAttribute('posX'),figureBody[3].getAttribute('posY')];



		function getNewState (a) {

			flag = true;
			//создали массив, в который записываем селектор
			let figureNew = [
				document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${+coordinates1[1]}"]`),
				document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${+coordinates2[1]}"]`),
				document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${+coordinates3[1]}"]`),
				document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${+coordinates4[1]}"]`),
			]

			//При движении вправо влево сравнивает с элементами с классом set если figureNew содержит set то flag = false и если какое либо значение figureNew false
			for (let i = 0; i < figureNew.length; i++) {
				if (!figureNew[i] || figureNew[i].classList.contains('set')) {
					flag = false;
				}
			}


			//Если flag true то цикло удаляем 
			if (flag == true) {
				for (let i = 0; i < figureBody.length; i++) {
					//ОбращаемсЯ к любому div в figureBody и удаляем всем div ему класс figure
					figureBody[i].classList.remove('figure');
				}

					//в figureBody добавляем figureNew
				figureBody = figureNew;

					//
				for (let i = 0; i < figureBody.length; i++) {
					//ОбращаемсЯ к любому div в figureBody и добавляем ему класс figure
					//Снова добавляем figure но уже новые координаты
					figureBody[i].classList.add('figure');
				}
			}


		}

		//если дигаемся вправо то  вызываем getNewState(-1) Если влево то getNewState(1) если вниз повторно вызывать move()
		if (e.keyCode == 37) {
			getNewState(-1)
		} else if (e.keyCode == 39) {
			getNewState(1)
		} else if (e.keyCode == 40) {
			move()
		} else if (e.keyCode == 38) {
			//Если нажата вверх переворачиваем
			//figureNew записываем новые селкторы но у которых координаты
			flag = true;
			let figureNew = [
			//координаты равны предыдушее положение coordinates1,2,3,4 + данные о повороте [+2 нужен для того что бы прибавить к 1 и в свою очередь обратиться к одному из массивив с координатами поворота ]
				document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentFigure][rotate + 2][0][0]}"][posY = "${+coordinates1[1] + mainArr[currentFigure][rotate + 2][0][1]}"]`),
				document.querySelector(`[posX = "${+coordinates2[0] + mainArr[currentFigure][rotate + 2][1][0]}"][posY = "${+coordinates2[1] + mainArr[currentFigure][rotate + 2][1][1]}"]`),
				document.querySelector(`[posX = "${+coordinates3[0] + mainArr[currentFigure][rotate + 2][2][0]}"][posY = "${+coordinates3[1] + mainArr[currentFigure][rotate + 2][2][1]}"]`),
				document.querySelector(`[posX = "${+coordinates4[0] + mainArr[currentFigure][rotate + 2][3][0]}"][posY = "${+coordinates4[1] + mainArr[currentFigure][rotate + 2][3][1]}"]`),
			];

			//перебераем figureNew сработает 4 раза и проверяем не пересикается ли новые div с классами set, что бы при повороте не элемент не застярял в стене
			for (let i = 0; i < figureNew.length; i++) {
				if (!figureNew[i] || figureNew[i].classList.contains('set')) {
					flag = false;
				}
			}

			//Если при попытке поворота не застряет то
			if (flag == true) {
				for (let i = 0; i < figureBody.length; i++) {
					//ОбращаемсЯ к любому div в figureBody и добавляем ему класс figure
					figureBody[i].classList.remove('figure');
				}

				figureBody = figureNew;

				for (let i = 0; i < figureBody.length; i++) {
					//ОбращаемсЯ к любому div в figureBody и добавляем ему класс figure
					figureBody[i].classList.add('figure');
				}

				//Сбрасываем rotate если он меньше 4 то увеличить на 1 если больше то сбросить до 1 
				if (rotate < 4) {
					rotate = rotate + 1
				} else {
					rotate = 1;
				}
			}
		}

	})
}