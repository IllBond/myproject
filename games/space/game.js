var canvas = document.getElementById('game')
var context = canvas.getContext('2d')
var canWidth = canvas.width;
var canHeight = canvas.height;
var astCor = []; //Создание массива в котором будут хранится координату каждого астеройда {x: ship.x+10, y: ship.y, dx:0, dy:-5.2}
var pillCor = []; //Создание массива в котором будут хранится координату каждого астеройда {x: ship.x+10, y: ship.y, dx:0, dy:-5.2}
var expl = []; // Для проигрывания анимации
var timer = 0; //таймер постоянно сравниваеться на кратность с каким то числои нужен для срабатывания ограниченного к.ва раз функции
var ship = {x:100, y:100} // Где стоит корабыль по умолчанию

var newShipX
var newShipY

var backgound = new Image(); //Создали объект на основе клаксса Image
backgound.src = 'space.jpg' // В обьект в поле src записали координату картинки

var aster = new Image();
aster.src = 'aster.png'

var shipIMG = new Image();
shipIMG.src = 'sheep.png'

var pill = new Image();
pill.src = 'sheep.png'

var explimg = new Image();
explimg.src = 'boom.png'


canvas.addEventListener('mousemove', function(event){ //При пережвижении мышки срабатывает функция которая в x и y кораблся записывает новую координату
	ship.x = event.offsetX-50;
	ship.y = event.offsetY-50; 
})

explimg.onload = function () { // После загрузки картинки boom.png запустится игра game()
	game()
}

function render () {
	context.drawImage(backgound, 0, 0, canWidth, canHeight)
	context.drawImage(shipIMG, ship.x, ship.y, 100, 100)
	
	for (i in pillCor) {
		console.log(pillCor[i].x)
		context.drawImage(pill, pillCor[i].x+50, pillCor[i].y, 5, 5)
	}

	for (i in astCor) {
		context.drawImage(aster, astCor[i].x, astCor[i].y, 100, 100)
	}

	for (i in expl)
	context.drawImage(explimg, 196*Math.floor(expl[i].animx),196*Math.floor(expl[i].animy),196,196, expl[i].x, expl[i].y, 100, 100);
	
}

function update(){
	timer++;

	if (timer%10==0) {
		//Если Таймер кратен 10 будет
		astCor.push({
			x:Math.random()*(canWidth-200)+100, 
			y:-100,
			dx:Math.random()*3-1, 
			dy:Math.random()*3-1,
			del:0
		});
	}


	if (timer%5==0) {
		//Если таймер кратен 5 будет выстрел
		pillCor.push({
			x: ship.x, 
			y: ship.y, 
			dx:0, 
			dy:-5
		});
	}


	for (i in pillCor) {
		//Если пуля уходит за пределы экрана то уничтожится
		//X и Y постоянно меняются на dy dx
			pillCor[i].y = pillCor[i].y+pillCor[i].dy;
			pillCor[i].x = pillCor[i].x+pillCor[i].dx;
			if (pillCor[i].y < 0) {
				pillCor.splice(i, 1)
			}
	}


	for (i in expl) {
		expl[i].animx=expl[i].animx+0.5;
		if (expl[i].animx>7) {expl[i].animy++; expl[i].animx=0}
		if (expl[i].animy>7) 
		expl.splice(i,1);
	}



	for (i in astCor) {
		// координата постояно меняется на dx dy
		astCor[i].y = astCor[i].y+astCor[i].dy;
		astCor[i].x = astCor[i].x+astCor[i].dx;

		//Если метеор касается левой границы он отталкнется
		if (astCor[i].x > canWidth-100 || astCor[i].x < 0) astCor[i].dx  = -astCor[i].dx
		//Если метеор касается низа экрана он исчезнет
		if (astCor[i].y > canHeight) astCor.splice(i, 1)


		for (j in pillCor) {
			//удаляем пулю и метеор при столкновении
			//Если разнорсть в координатах < 50 то уничтожить обекты
			if (Math.abs(astCor[i].x-pillCor[j].x)<50 && Math.abs(astCor[i].y-pillCor[j].y)<50) {
				expl.push({x:astCor[i].x,y:astCor[i].y,animx:0,animy:0}); // проиграть анимацию уничтожения с координатами астеройда
				astCor[i].del=1; // добавлляем к нужному метеорту del затем что бы удалить
				pillCor.splice(j,1); // удаляем пулю
				break
			}

			if (astCor[i].del == 1) {
				// удаляем метеориты у которых del = 1
				astCor.splice(i,1);
			}

		}
	}

}

function game () {
	update()
	render()
	requestAnimFrame(game)
}

var requestAnimFrame = (function(){
	return window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	window.mozRequestAnimationFrame || 
	window.oRequestAnimationFrame || 
	window.msRequestAnimationFrame || 
	function (callback){
		window.setTimeout(callback, 1000/20)
	}
})();
