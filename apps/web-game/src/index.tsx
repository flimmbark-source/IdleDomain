import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

import { renderGrid } from "./render/renderGrid";
import {
  enemies,
  gameState,
  gridHeight,
  gridWidth,
  spawnEnemy,
  wallRow,
} from "./state/gameState";
import { enemyMovementSystem } from "./systems/enemyMovementSystem";

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
    let lastTimestamp = 0;
    let spawnCounter = 0;
    const spawnInterval = 120;

    const renderFrame = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (!gameState.runEnded) {
        spawnCounter += 1;

        if (spawnCounter >= spawnInterval) {
          spawnEnemy();
          spawnCounter = 0;
        }

        enemyMovementSystem(delta);
      }

      renderGrid(ctx, { gridWidth, gridHeight, wallRow, enemies });

      if (!gameState.runEnded) {
        animationFrame = requestAnimationFrame(renderFrame);
      }
    };

    animationFrame = requestAnimationFrame(renderFrame);

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
