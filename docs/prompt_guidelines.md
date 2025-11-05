# Prompt Guidelines for live-frontier

Use the following structure for all AI-assisted development prompts.

## Template

You are updating the live-frontier project. Refer to docs/codex_context.md.

Goal:
- [Describe the smallest possible unit of functionality]

Files to modify:
- /apps/web-game/src/[path]

Files not to modify:
- [List to protect scope]

Instructions:
- Bullet points of required changes
- Include anchors if relevant (search for comments like // TODO:)

Constraints:
- Preserve existing comments
- No new libraries
- No magical global state
- Write pure functions when feasible

Output Format:
- Provide updated files only
- No commentary or explanation
- Do not omit existing code

## Style
- Ask for incremental changes
- One responsibility per prompt
- Avoid multi-system modifications
- Do not request multiple new files unless necessary

## Behaviors
Codex should:
- Add clear anchors for future changes
- Avoid removing TODOs
- Avoid reformatting unrelated code

## Safety Words
Include phrases like:
- "Do not modify other systems"
- "Keep all signatures the same"
- "Minimize diff"

## Regression Handling
If tests fail:
- Prompt: "Fix failing tests generated previously."

## Architectural Reminders
When adding new behavior:
- Ask Codex to suggest a refactor if complexity emerges
