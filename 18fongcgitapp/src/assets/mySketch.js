var droplets = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	
}

function draw() {
var newDrop = int(random(40));
	background('#0e293c')
	for(var i = 0; i < droplets.length ; i +=1)  {
		droplets[i].show();
		if(droplets[i].radius >= 500) {
			droplets.splice(i,1);
		}

	}
	
	if(newDrop == 12) {
			droplets.push(new Droplet(random(windowWidth), random(windowHeight)));
	}

}

function mouseClicked() { 
	droplets.push(new Droplet(mouseX, mouseY));
	
}



class Droplet {
	
	constructor(x,y) {
		
		this.x = x;
		this.y = y;
		this.radius = 20;
		this.radiusSpeed = 5;
		this.secondRadius = random(this.radius-50, this.radius);
		this.secondRadiusSpeed = random(4,6);
		this.randomMaxRadius = random(350, 450);
		this.randomSecondMaxRadius = random(350, 450);

	}
	
	show() {
		noFill();
		stroke('#18bad4')
		if(this.radius <= this.randomMaxRadius) {
			circle(this.x,this.y,this.radius);
		}
		if(this.radius <= this.randomSecondMaxRadius) {
					circle(this.x,this.y,this.secondRadius);
		}

		this.radius +=this.radiusSpeed;
		this.secondRadius += this.secondRadiusSpeed;
		this.secondRadiusSpeed -= 0.01;
		this.radiusSpeed -=0.02;
		
		
	}
}