# First Stories (Vertical Slices)

These are the initial game development increments.
Complete them in order, merging between each.

---

## Story 1 — Grid + Wall Rendering
- Render a simple grid
- Draw a wall row boundary
- Expose wallRow index in state

Acceptance:
- Visual grid appears
- Clearly-highlighted wall row

---

## Story 2 — Spawn & March Enemies
- Spawn 3 enemies above wall
- Move them down each tick
- Stop movement after breach

Acceptance:
- Enemies visually march
- Breach ends run

---

## Story 3 — Defender Idle + Patrol
- Spawn defenders along wall row
- Patrol horizontal ranges
- Detect enemies in radius
- Move to engage

Acceptance:
- Defenders move horizontally
- Defenders intercept enemies

---

## Story 4 — Gatherer Stub Movement
- Spawn gatherers
- Move up to resource nodes
- Return down to drop-off
- Ignore combat for now

Acceptance:
- Gatherers animate up and down
