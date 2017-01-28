//5
// function To Objekt to array

var balls = [];
var cvs;
function setup() {
	cvs = createCanvas(800, 600);
	cvs.parent("p5container");
	//durch Übergabe an Parameter in Object kann dasentfallen
/*	for (var i = 0; i < 2; i++) {
		balls[i] = new Ball();
	}*/
}
function mouseDragged() {
  balls.push(new Ball(mouseX, mouseY)); // Arrrayfunction
}

/*function keyPressed(){
	// splice(index-position, amount)
	balls.splice(0,1);
}*/

function draw() {
	background(0);
	for (var i = 0; i < balls.length; i++) {
		balls[i].move();
		balls[i].display();
		balls[i].bounce();
	}
	if (balls.length > 10){
		balls.splice(0,3);
	}
}

function Ball(x,y) {

	this.x = x;
	this.y = y;
	this.xSpeed = random(-2, 4);
	this.ySpeed = random(-2, 4);

	this.display = function() {
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, 24, 24);
	}

	this.move = function() {
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}

	this.bounce = function() {
		if (this.x > width || this.x < 0) {
			this.xSpeed = this.xSpeed * -1;
		}
		if (this.y > height || this.y < 0) {
			this.ySpeed = this.ySpeed * -1;
		}
	}
}
