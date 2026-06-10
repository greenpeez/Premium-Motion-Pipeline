# Premium Motion Pipeline

A Codex skill for turning rough product animation ideas into polished motion systems.

It is designed for premium landing-page animation work where the output needs more than a quick CSS animation: metaphor mapping, object systems, storyboards, Blender/Figma asset production, proof renders, debugging, final exports, and web integration.

## What It Helps With

- Turning vague animation direction into a clear production brief.
- Mapping product ideas into literal visual metaphors.
- Defining reusable animation objects before rendering.
- Creating storyboard checkpoints before implementation.
- Using proof renders instead of jumping straight to final exports.
- Debugging visual issues by layer: model, material, timing, occlusion, alpha, compositing, or CSS.
- Integrating rendered sequences into real web pages.

## Core Workflow

```text
rough prompt
-> motion brief
-> metaphor map
-> object system
-> storyboard
-> proof render
-> debug loop
-> final export
-> web integration
```

The skill is checkpoint-driven. An agent should work autonomously inside a checkpoint, but should not cross major visual-direction gates without approval.

## Files

- `SKILL.md` - the main Codex skill.
- `references/motion-brief-template.md` - turns a rough idea into a production brief.
- `references/metaphor-map-template.md` - maps product meaning to literal animation objects.
- `references/storyboard-template.md` - defines key states, timing, and occlusion rules.
- `references/render-proof-ladder.md` - establishes a low-cost proof path before final renders.
- `references/debug-taxonomy.md` - helps isolate visual bugs by production layer.
- `references/web-integration-checklist.md` - checks final animation placement in a real page.

## Installation

Clone this repo into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/greenpeez/Premium-Motion-Pipeline.git ~/.codex/skills/premium-motion-pipeline
```

Or install it directly with `npx` from GitHub:

```bash
npx github:greenpeez/Premium-Motion-Pipeline
```

After installation, Codex can trigger the skill when you ask for a full product animation pipeline, premium landing-page motion, storyboard-to-render work, Blender/Figma animation planning, or animation debugging.

## Usage Example

```text
Use the premium motion pipeline skill to turn this rough hero animation idea into a storyboard and render plan.
```

The skill should first produce a motion brief and checkpoint plan, not immediately start rendering.

## Design Philosophy

The skill exists to prevent the common failure mode of going directly from a rough prompt to animation code. High-quality motion needs the metaphor, object system, storyboard, occlusion rules, timing, and integration target to be clear before production starts.
