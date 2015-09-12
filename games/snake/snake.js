	function main () {
		var canvas = document.getElementById("the-canvas"),
		ctx = canvas.getContext("2d"),
		x=0, 
		y=0, 
		key = "right", 
		rx = getRandomValue(0, 44), 
		ry = getRandomValue(0, 44),
		height = canvas.height,
		width = canvas.width,
		array = [],
		score = 0;

	document.onkeydown = function(e) {
		switch (e.keyCode) {
			case 37: 
					if (key === "right") {
						return;
					}
					else {
						key = "left";
					}
					break;
					
			case 38: 
					if (key === "down") {
						return;
					}
					else {
						key = "up";
					}
					break;
					
			case 39:
					if (key === "left") {
						return;
					}
					else {
						key = 'right';
					}
					break;
				
			case 40:
					if (key === "up") {
						return;
					}
					else {
						key = 'down';
					}
					break;
			default: return;
		}
	};

	function createFood(rx, ry) {
		ctx.fillStyle = "green";
		ctx.strokeStyle = "black";
		ctx.fillRect(rx, ry, 10, 10);
		ctx.strokeRect(rx, ry, 10, 10);
		ctx.stroke();
	}

	function paint(x, y) {
			
			ctx.fillStyle = "orange";
			ctx.strokeStyle = "black";
			ctx.fillRect(x, y, 10, 10);
			ctx.strokeRect(x, y, 10, 10);
			ctx.stroke();
		}
		
	function createSnake() {

		for (var i = 5; i > 0; i--) {
			
			array.push({x: i*10, y:0});
		}
	
	}
	createSnake();

	function stopFunction() {
		clearInterval(move)	
	}
	var move = setInterval(function() {
		moveSnake();
	}, 100)
	
	function moveSnake() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var headX = array[0].x,
			headY = array[0].y;
			
		if (headX == rx && headY == ry) {
			rx = getRandomValue(0, 44);
			ry = getRandomValue(0, 44);
			array.push({rx, ry});
			score++;
		}
		createFood(rx, ry);

		if (key === "right") {
			headX += 10;
		}
		if (key === "down") {
			headY += 10;
		}
		if (key === "up") {
			headY -= 10;
		}
		if (key === "left") {
			headX -= 10;
		}
		if (headX < 0 || headX >= width || headY < 0 || headY >= height || checkCollision()) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			stopFunction();
			main();
			return;
		}
		var tail = array.pop();
		tail.x = headX;
		tail.y = headY;
		array.unshift(tail);
		for(var i = 0; i < array.length; i++) {
			var c = array[i];
			paint(c.x, c.y);
		}
		var scoreText = "Score: " + score;
			ctx.fillStyle = "blue";
			ctx.font = '14pt Calibri';
			ctx.fillText(scoreText, 5, height-5);
		function checkCollision() {
		
			for (var i = 0; i < array.length; i++) {
				if(array[i].x == headX && array[i].y == headY)
				return true;
			}
			return false;
		}
	}
	
	function getRandomValue(min, max) {
		return (Math.floor(Math.random()*(max-min)+min))*10;
	}
}
main();