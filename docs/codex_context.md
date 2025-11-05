# live-frontier — Codex Context Document
This file defines architectural rules, naming conventions, update order, and constraints for the live-frontier game project. All AI-assisted code modifications must reference this document.

## Goals
- Vertical frontier idle-defense roguelite
- Layered complexity added over time
- Smooth future refactoring into ECS

## Core Loop Order
1. Build Phase (player placement)
2. Gather Phase (timed resource cycle)
3. Defend Phase (enemy waves)
4. Research / Upgrade application
5. Prepare next cycle

## Simulation Tick Order
1. Handle input intent (flag changes)
2. Move gatherers
3. Move enemies
4. Apply collision/combat
5. Move defenders (patrol or toward flags)
6. Apply wall damage
7. End conditions check
8. Sync state → render

## World Representation
- Tile-based grid
- Y increases upward (wilderness above)
- Wall row defines breach boundary
- Buildings occupy discrete tiles

## Entities (Hybrid Start)
- Enemy
- Gatherer
- Defender
- Building

## Components (Introduced post-migration)
- Position
- Movement
- Combat
- Patrol
- Gatherer
- EnemyTag
- DefenderTag
- BuildingTag

## Systems (Introduced post-migration)
- MovementSystem
- PatrolSystem
- CombatSystem
- GatherSystem
- SpawnSystem
- DefendPhaseSystem

## Rendering
- 2D grid visualized simply at first
- Avoid complex sprite work early

## AI Rules (Simplified)
- Defenders patrol horizontally across wall
- Defenders move toward active flag during waves
- Enemies march downward
- Gatherers move up, then return

## Loss Condition
- Any enemy entering wall row → immediate run end

## Coding Constraints
- No new dependencies unless approved
- Preserve existing comments
- Keep functions pure unless clearly stateful
- Use small, composable modules

## Naming Conventions
- camelCase for variables/functions
- PascalCase for classes
- UPPER_SNAKE for constants
- `System` suffix for ECS-like systems

## Folder Structure
/apps
  /web-game
    /src
      /entities
      /systems
      /state
      /render

## File Boundaries
- Entities define data + simple methods
- Systems process arrays of entities
- State holds world, time, flags

## Refactor Trigger
When Entity classes exceed 6–7 fields or behaviors, migrate into ECS components.

## Output Expectations
Codex should output full updated files only, no commentary.
