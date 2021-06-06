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
	
	
	
	console.log('Game started');
}

function resizeCanvas() {
	const canvas = document.getElementById('mainCanvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

