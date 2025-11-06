import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

import { renderGrid } from "./render/renderGrid";
import { gridHeight, gridWidth, wallRow } from "./state/gameState";

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let animationFrame: number;

    const renderFrame = () => {
      renderGrid(ctx, { gridWidth, gridHeight, wallRow });
      animationFrame = requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        maxWidth: "360px",
        border: "1px solid #1f2933",
        margin: "0 auto",
      }}
    />
  );
};

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
