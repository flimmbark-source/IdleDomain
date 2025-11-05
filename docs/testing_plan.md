# Testing Plan — live-frontier

## Early Tests (Week 1)
Focus on movement correctness.

### Movement Tests
- Enemy moves downward exactly 1 tile per tick
- Defender patrol stays within range
- Defender engages nearest enemy within radius
- Gatherer moves up then down

### Breach Tests
- When enemy enters wall row, run state changes to "ended"

### Boundary Tests
- Entities never leave grid bounds
- Defenders do not patrol outside allowed X range

---

## Mid Tests (Week 2)
- Building placement respects grid
- Gatherers prefer Storehouse drop-off
- Research ticks down over wave count

---

## Late Tests (Week 3)
- Era modifiers apply
- Daily modifiers apply
- Adjacency bonuses apply
- Rare events trigger table-driven effects

---

## Snapshot Tests
Snapshot the render output at low resolution to prevent UI regressions.

## Telemetry Tests
- Run summary is exported correctly
- Wave stats recorded accurately

## Regression Commands
If tests break, prompt:
"Fix failing tests generated previously."
