import p5 from "p5";

export const opSketchAbout = (p: p5, colors: { stroke: string; background: string }) => {



  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    
  };


  p.draw = () => {
    p.background(colors.background);
    p.noFill();
    p.stroke(colors.stroke);
    
  };
} 