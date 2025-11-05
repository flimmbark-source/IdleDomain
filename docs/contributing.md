# Contributing Guidelines — live-frontier

## Philosophy
We grow the simulation in thin vertical slices and refactor before expanding APIs.

## Branching
- All new work is done in feature/* branches
- Never commit directly to develop or main
- Merge only after tests pass

## Commit Messages
Follow conventional commits:
- feat: new gameplay feature
- fix: bug fix
- refactor: internal changes
- test: add or update tests
- docs: update documentation

## Code Standards
- Small pure functions
- Single responsibility
- Avoid monolithic entity classes
- Prefer data-driven configuration

## Adding Features
1. Create a new feature branch
2. Write tests first if possible
3. Implement in small slices
4. Submit PR
5. Merge after test suite passes

## Review Rules
Reject changes if:
- They collapse concerns
- They add global state
- They remove anchors
- They refactor multiple responsibilities at once

## Logging
Do not add console.log spam.
Use structured debug helpers if needed.

## Future ECS Migration
When entities become too busy, migrate fields into components and create systems.

Worth calling out in a PR and commit message.
