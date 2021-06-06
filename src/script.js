window.addEventListener('load', start, false);



function start() {
	console.log('Starting new game...');
	
	var canvas = document.createElement('canvas');
	canvas.id = "mainCanvas";
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.zIndex = 8;
	canvas.style.position = "absolute";
	canvas.style.backgroundColor = "black";
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(canvas);
	window.addEventListener('resize', resizeCanvas, false);
	
	const render = new Renderer(canvas);
	const scene = render.scene;
	scene.add(new BaseUnit(new Vector2(100, 100)));

	console.log('Game started');

	canvas.addEventListener('mousemove', (e)=>{
		if (e.buttons==1 && e.button==0) {
			if (scene.area) {
				scene.area.x1 = e.offsetX;
				scene.area.y1 = e.offsetY;
			} else {
				scene.area = new Area(e.offsetX, e.offsetY, e.offsetX, e.offsetY);
			}
		}
		return false;
	});

	canvas.addEventListener('mouseup', (e)=>{
		if (scene.area) {
			scene.area = null;
		}
		return false;
	});
}

function resizeCanvas() {
	const canvas = document.getElementById('mainCanvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function BaseUnit(position = new Vector2(), width = 10, height = 10, zindex = 0) {
	this.position = position;
	this.width = width;
	this.height = height;
	this.zindex = zindex;
	
	this.update = ()=>{

	}

	this.render = (ctx)=>{
		ctx.fillStyle = 'lime';
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

function Area(x0, y0, x1, y1) {
	this.x0 = x0;
	this.y0 = y0;
	this.x1 = x1;
	this.y1 = y1;

	this.render = (ctx) => {
		ctx.strokeStyle = 'lime';
		ctx.strokeRect(this.x0, this.y0, this.x1 - this.x0, this.y1 - this.y0);
	}

}
