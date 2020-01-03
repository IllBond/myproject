(()=>{
const config = {

	dotMin: 6,
	dotMax: 20,
	sphereRad: 300,
	bigDotRad: 35,
	massFactor : 0.002,
	defColor: 'rgba(250, 10, 30, 0.54)',
	smooth: 0.65, // 
	mouseSize: 120,
}


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let w, h, mouse, dots


class Dot {
	constructor(r){
		this.pos = {x: mouse.x, y: mouse.y}
		this.vel = {x: 0, y: 0} //скорость по x и  y 
		this.rad = r || random(config.dotMin, config.dotMax)
		this.mass = this.rad * config.massFactor
		this.color = config.defColor
	}

	draw(x,y) {
		this.pos.x = x || this.pos.x + this.vel.x
		this.pos.y = y || this.pos.y + this.vel.y
		createCircle(this.pos.x, this.pos.y, this.rad, true, this.color)
		createCircle(this.pos.x, this.pos.y, this.rad, false, config.defColor)
	}
}


// Движение и отталкивание частиц
function updateDots () {
	for ( let i = 1; i < dots.length; i++) {
		let acc = {x: 0, y: 0}
		for(let j = 0; j < dots.length; j++){
			if (i == j ) continue
			let [a, b] = [dots[i], dots[j]]
			let delta = {x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y}
			let dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y) || 1
			let force = (dist - config.sphereRad) / dist * b.mass;


			if (j == 0) {
				let alpha = config.mouseSize / dist;
				a.color = `rgba(250, 10, 30, ${alpha})`
				dist < config.mouseSize ? force = (dist - config.mouseSize) * b.mass : force = a.mass // сюда можно поставить 1 или 0 будет прикорльно
			}

			acc.x += delta.x * force 
			acc.y += delta.y * force
		}

		dots[i].vel.x = dots[i].vel.x * config.smooth+ acc.x  * dots[i].mass
		dots[i].vel.y = dots[i].vel.y * config.smooth+ acc.y  * dots[i].mass
	}

	dots.map(val => val == dots[0] ? val.draw(mouse.x, mouse.y) : val.draw())
}

function createCircle(x,y,rad,fill,color) {
	ctx.fillStyle = ctx.strokeStyle = color
	ctx.beginPath()
	ctx.arc(x, y, rad, 0, 2 * Math.PI )
	ctx.closePath()
	fill ? ctx.fill() : ctx.stroke()

}

function random(min, max) {
	return Math.random() * (max - min) + min
}

function init () {
	w = canvas.width = innerWidth 
	h = canvas.height = innerHeight

	mouse = {x: w/2, y: h/2, down: false}
	dots = []

	dots.push(new Dot(config.bigDotRad))
}

function loop () {
	ctx.clearRect(0,0,w,h) 

	if (mouse.down) {
		dots.push(new Dot())
	}
	console.log(dots)
	updateDots()
	
	
	window.requestAnimationFrame(loop) // постоянный перевызов себя же
}

init();
loop()

function setPos({layerX,layerY}) {
	[mouse.x,mouse.y] = [layerX,layerY]
}

function isDown() {
	mouse.down = !mouse.down
}

canvas.addEventListener('mousemove', setPos)
window.addEventListener('mousedown', isDown)
window.addEventListener('mouseup', isDown)
})()