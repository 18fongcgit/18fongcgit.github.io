// src/components/P5Canvas.tsx
import { useEffect, useRef } from "react";
import p5 from "p5";
import { useTheme } from "../context/ThemeContext";
import { opSketch } from "../p5/opSketch";
import { opSketchLight } from "../p5/opSketch-light";

export default function P5canvas() {
  const hostRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<p5 | null>(null);
  const { isDarkMode } = useTheme();
  const sketch = isDarkMode ? opSketchLight : opSketch;

  useEffect(() => {
    if (!hostRef.current) return;
    // Create a wrapper sketch that adds windowResized
    const wrappedSketch = (p: p5) => {
      sketch(p);
      p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };
    instanceRef.current = new p5(wrappedSketch, hostRef.current);
    return () => instanceRef.current?.remove();
  }, [sketch]);

  return <div ref={hostRef} style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 0 }} />;
}