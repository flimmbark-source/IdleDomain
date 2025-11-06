export interface GridRenderOptions {
  gridWidth: number;
  gridHeight: number;
  wallRow: number;
  cellSize?: number;
}

const defaultCellSize = 18;
const gridColor = "#1f2933";
const backgroundColor = "#0b0d17";
const wallColor = "#f97316";
const wallHighlightColor = "#fb923c";

export function renderGrid(
  ctx: CanvasRenderingContext2D,
  { gridWidth, gridHeight, wallRow, cellSize = defaultCellSize }: GridRenderOptions,
) {
  const canvasWidth = gridWidth * cellSize;
  const canvasHeight = gridHeight * cellSize;

  if (ctx.canvas.width !== canvasWidth || ctx.canvas.height !== canvasHeight) {
    ctx.canvas.width = canvasWidth;
    ctx.canvas.height = canvasHeight;
  }

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  for (let y = 0; y < gridHeight; y += 1) {
    const drawY = gridHeight - y - 1;

    for (let x = 0; x < gridWidth; x += 1) {
      const px = x * cellSize;
      const py = drawY * cellSize;
      const isWall = y === wallRow;

      ctx.fillStyle = isWall ? wallColor : gridColor;
      ctx.fillRect(px, py, cellSize - 1, cellSize - 1);

      if (isWall) {
        ctx.strokeStyle = wallHighlightColor;
        ctx.lineWidth = 2;
        ctx.strokeRect(px + 1, py + 1, cellSize - 3, cellSize - 3);
      }
    }
  }

  // TODO: drawDefenders()
  // TODO: drawEnemies()
  // TODO: drawGatherers()
}
