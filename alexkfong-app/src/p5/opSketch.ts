// src/p5/opSketch.ts
import p5 from "p5";

export const opSketch = (p: p5, colors: { stroke: string; background: string }) => {
  // const isDarkMode = useTheme();
  class Droplet {
    x: number;
    y: number;
    radius: number;
    radiusSpeed: number;
    secondRadius: number;
    secondRadiusSpeed: number;
    randomMaxRadius: number;
    randomSecondMaxRadius: number;
    alpha: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.radius = 20;
      this.radiusSpeed = 5;
      this.secondRadius = p.random(this.radius - 50, this.radius);
      this.secondRadiusSpeed = p.random(4, 6);
      this.randomMaxRadius = p.random(350, 450);
      this.randomSecondMaxRadius = p.random(350, 450);
      this.alpha = 255;
    }

    show() {
      p.noFill();
      var strokeColor = p.color(colors.stroke);
      strokeColor.setAlpha(this.alpha);
      this.alpha-= 2.5;
      p.stroke(strokeColor);


      if (this.radius <= this.randomMaxRadius) {
        p.circle(this.x, this.y, this.radius);
      }
      if (this.radius <= this.randomSecondMaxRadius) {
        p.circle(this.x, this.y, this.secondRadius);
      }

      this.radius += this.radiusSpeed;
      this.secondRadius += this.secondRadiusSpeed;
      this.secondRadiusSpeed -= 0.01;
      this.radiusSpeed -= 0.02;
    }
  }

  const droplets: Droplet[] = [];

  p.setup = () => {
    // The wrapper will resize this to the parent; this is just an initial size.
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    const newDrop = p.int(p.random(30));
    p.background(colors.background);

    // Iterate backwards so splice doesn't skip the next element
    for (let i = droplets.length - 1; i >= 0; i--) {
      const d = droplets[i];
      d.show();
      if (d.radius >= 500) {
        droplets.splice(i, 1);
      }
    }

    if (newDrop === 12) {
      droplets.push(new Droplet(p.random(p.width), p.random(p.height)));
    }
  };

  p.mouseClicked = () => {
    droplets.push(new Droplet(p.mouseX, p.mouseY));
  };
};