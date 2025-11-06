import { Enemy } from "../entities/enemy";

export const gridWidth = 20;
export const gridHeight = 30;
export const wallRow = 10;

export const enemies: Enemy[] = [];

export let runEnded = false;

export function spawnEnemy() {
  if (runEnded) {
    return;
  }

  const x = Math.floor(Math.random() * gridWidth);
  const y = gridHeight + 3;

  enemies.push(new Enemy(x, y));
}

export function breach() {
  runEnded = true;
}

export const gameState = {
  get gridWidth() {
    return gridWidth;
  },
  get gridHeight() {
    return gridHeight;
  },
  get wallRow() {
    return wallRow;
  },
  get runEnded() {
    return runEnded;
  },
  set runEnded(value: boolean) {
    runEnded = value;
  },
  get enemies() {
    return enemies;
  },
};
