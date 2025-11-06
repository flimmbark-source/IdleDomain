export const gridWidth = 20;
export const gridHeight = 14;
export const wallRow = Math.max(0, gridHeight - 3);

export let runEnded = false;

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
};
