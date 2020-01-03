(()=>{
const config = {

	dotMin: 6,
	dotMax: 20,
	sphereRad: 1000,
	massFactor : 0.002,
	defColor: 'rgba(250, 10, 30, 0.9)',
	smooth: 0.95, // 

}


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let w, h, mouse, dots


class Dot {
	constructor(){
		this.pos = {x: mouse.x, y: mouse.y}
		this.vel = {x: 0, y: 0} //скорость по x и  y 
		this.rad = random(config.dotMin, config.dotMax)
		this.mass = this.rad * config.massFactor
		this.color = config.defColor
	}

	draw() {
		this.pos.x += this.vel.x
		this.pos.y += this.vel.y
		createCircle(this.pos.x, this.pos.y, this.rad, true, this.color)
		createCircle(this.pos.x, this.pos.y, this.rad, false, config.defColor)
	}
}


// Движение и отталкивание частиц
function updateDots () {
	for ( let i = 0; i < dots.length; i++) {
		let acc = {x: 0, y: 0}
		for(let j = 0; j < dots.length; j++){
			if (i == j ) continue
			let [a, b] = [dots[i], dots[j]]
			let delta = {x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y}
			let dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y)
			let force = (dist - config.sphereRad) / dist * b.mass;

			acc.x += delta.x * force 
			acc.y += delta.y * force
		}

		dots[i].vel.x = dots[i].vel.x * config.smooth+ acc.x  * dots[i].mass
		dots[i].vel.y = dots[i].vel.y * config.smooth+ acc.y  * dots[i].mass
	}
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
}

function loop () {
	ctx.clearRect(0,0,w,h) 

	if (mouse.down) {
		dots.push(new Dot())
	}
	console.log(dots)
	updateDots()
	dots.map(val => val.draw())
	
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