import { enemies, breach, runEnded, wallRow } from "../state/gameState";

export function enemyMovementSystem(delta: number) {
  if (runEnded) {
    return;
  }

  for (const enemy of enemies) {
    enemy.y += enemy.speed * delta;

    if (enemy.y >= wallRow) {
      breach();
      return;
    }
  }
}
