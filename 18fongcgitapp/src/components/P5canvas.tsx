// src/components/P5Canvas.tsx
import { useEffect, useRef } from "react";
import p5 from "p5";
import { useTheme } from "../context/ThemeContext";


export default function P5canvas({ sketch }: { sketch: (p: p5, colors: { stroke: string; background: string }) => void }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<p5 | null>(null);
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ?  { stroke: "#0c5060", background: "#f0f8fb" } : { stroke: "#18bad4", background: "#0e293c" }

  useEffect(() => {
    if (!hostRef.current) return;
    // Create a wrapper sketch that adds windowResized
    const wrappedSketch = (p: p5) => {
      sketch(p, colors);
      p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };
    instanceRef.current = new p5(wrappedSketch, hostRef.current);
    return () => instanceRef.current?.remove();
  }, [sketch, colors]);

  return <div ref={hostRef} style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 0 }} />;
}