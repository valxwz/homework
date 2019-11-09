window.addEventListener("load", () => {
	let canvas = document.getElementById("drawing-board");
	let ctx = canvas.getContext("2d");

	let pageWidth = document.documentElement.clientWidth;
	let pageHeight = document.documentElement.clientHeight;

	let drawColor = "#ff0000"
	let colorPicker = document.getElementById("colorpicker");

	let painting = true;
	canvas.width = 0.8 * pageWidth;
	canvas.height = 0.8 * pageHeight;


	function draw(x1, y1, color) {
		if (!painting) return;
		ctx.beginPath();
		ctx.arc(x1, y1-50, 10, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	}

	function onMouseMove(e) {
		console.log("move");
		var x = e.clientX;
		var y = e.clientY;
		if (painting === true) {
			draw(x, y, drawColor);
		}
	}

	document.onkeydown = (e) => {
		console.log("key");
		if (e.keyCode === 32) {
			console.log("space key");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.restore();
		} else if (e.keyCode === 66) {
			console.log("b key");
			drawColor = "#0000ff";
		} else if (e.keyCode === 71) {
			console.log("g key");
			drawColor = "#00ff00";
		} else if (e.keyCode === 82) {
			console.log("r key");
			drawColor = "#ff0000";
		} else if (e.keyCode === 89) {
			console.log("y key");
			drawColor = "#ffff00";
		} else if (e.keyCode === 38) {
			console.log("arrowUp pressed");
			painting = false;
			document.getElementById('annotation').innerHTML = 'Hit "arrow down" key to pick up the pen and start drawing.';
		} else if (e.keyCode === 40) {
			console.log("arrowDown pressed");
			painting = true;
			document.getElementById('annotation').innerHTML = 'Hit "arrow up" to stop drawing.';
		}
	};

	colorPicker.addEventListener("input", e => drawColor = colorPicker.value);
	window.onresize = resizeCanvas;

	function resizeCanvas() {
		let currHeight = document.documentElement.clientHeight;
		let currWidth = document.documentElement.clientWidth;
		let canvasHeight = 0.8 * currHeight;
		let canvasWidth = 0.8 * currWidth;
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
	}

	canvas.addEventListener("mousemove", onMouseMove);
	// canvas.addEventListener("touchmove", onTouchMove);



});