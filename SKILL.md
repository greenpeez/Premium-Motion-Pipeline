---
name: premium-motion-pipeline
description: Use when turning a rough product animation idea into a polished visual animation pipeline: metaphor mapping, object system, Figma/storyboard planning, Blender or rendered asset production, motion proofing, debugging, final export, and website integration. Especially useful for premium landing-page hero animations, scroll-driven product visuals, 3D object loops, transparent PNG/video sequences, and visual effects that require user checkpoints.
---

# Premium Motion Pipeline

Use this skill when the task is not just "write animation code", but to create a polished product animation end to end.

The workflow is checkpoint-driven. Work autonomously inside a checkpoint, but do not cross major visual-direction gates without user signoff.

## Core Principle

Do not go from rough prompt directly to code or render.

Use this order:

`rough prompt -> motion brief -> metaphor map -> object system -> storyboard -> proof render -> debug loop -> final export -> web integration`

## Workflow

1. **Extract the motion brief**
   - Identify the product idea, user-facing meaning, target section, trigger, loop behavior, scroll behavior, visual references, and exclusions.
   - Convert vague terms into observable traits. Example: "premium" means slower cadence, stable camera, clean occlusion, restrained easing, no jitter, and no decorative noise unless approved.
   - Use `references/motion-brief-template.md` when the user gives a new concept or asks to formalize direction.

2. **Map metaphor to literal objects**
   - Define what each visible object means.
   - Avoid abstract shapes unless the user explicitly wants abstraction.
   - Prefer literal product metaphors: input objects, transformation object, output objects, tracking object, account object, route/path, gate/portal, pile, stream, ledger, etc.
   - Use `references/metaphor-map-template.md` when the metaphor is not locked.

3. **Lock the object system**
   - Define the reusable visual parts before animating: models, marks, materials, colors, poses, camera angles, scale, shadow/lighting rules, and occlusion rules.
   - If objects need Blender, Figma remains the flat design/source-of-truth and Blender becomes the production asset tool.
   - Do not animate a token, product mark, logo, or 3D object before its static state is approved.

4. **Storyboard the motion**
   - Create key states before implementation.
   - Include object position, depth order, occlusion, trigger, timing, easing, and what the viewer should understand at each beat.
   - For loops, include the seam: how the end returns cleanly to the beginning.
   - Use `references/storyboard-template.md` for page-load loops, scroll-scrubbed sections, and card-contained micro-motion.

5. **Use a proof ladder**
   - Start with the cheapest proof that can validate the next decision.
   - Do not run final high-resolution exports before low-resolution motion and compositing are approved.
   - Use `references/render-proof-ladder.md` before Blender, Rive, Lottie, canvas, or PNG/video sequence production.

6. **Debug by layer**
   - When a visual bug repeats, stop tweaking blindly.
   - Classify the issue: object model, material, camera, timing, occlusion, alpha/holdout, render settings, page compositing, CSS scale, or asset path.
   - Use screenshots/frame numbers to isolate the failing layer.
   - Use `references/debug-taxonomy.md` when the user reports an artifact, jitter, wrong occlusion, strange mask, broken loop, or mismatch from references.

7. **Integrate into the real page**
   - Confirm the target page/file before replacing assets.
   - Preserve existing page layers unless the user asks to change them.
   - Verify desktop and mobile scale separately.
   - Use `references/web-integration-checklist.md` before final handoff.

## Checkpoint Gates

Stop for user approval at these points unless the user has explicitly authorized autopilot through that gate:

1. Motion brief and constraints.
2. Metaphor and object map.
3. Static object/style direction.
4. Storyboard/key states.
5. First proof render or prototype.
6. Low-resolution motion proof in context.
7. Final page integration.

## Guardrails

- Do not add new site sections, pages, design systems, or decorative motifs without approval.
- Do not use project logos as generic decorative elements unless approved.
- Do not hide geometry bugs by changing timing unless the user asked for a timing change.
- Do not introduce visible helper masks, sleeves, fields, or blockers unless they are part of the approved design.
- Do not call a render final until it has been checked in the real target page, at the intended scale.
- If a user says the result is "not it", return to metaphor, object system, or storyboard before continuing implementation.

## Output Shapes

For planning/checkpoint responses, prefer concise tables:

```markdown
| Section | Meaning | Metaphor | Objects | Motion Role | Approval Needed |
| --- | --- | --- | --- | --- | --- |
```

For debugging:

```markdown
| Symptom | Likely Layer | Evidence | Diagnostic | Fix | Preserve |
| --- | --- | --- | --- | --- | --- |
```

For storyboards:

```markdown
| Beat | Time / Progress | Image State | Motion | Occlusion / Depth | Notes |
| --- | --- | --- | --- | --- | --- |
```
